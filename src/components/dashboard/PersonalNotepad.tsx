import React, { useState, useRef, useEffect } from "react";
import { Checkbox } from "../ui/checkbox"; // Assuming you have a Checkbox component similar to shadcn/ui
import { Card } from "../ui/card";
import ExternalLink from "../../assets/icons/link-external.svg";
import MoreHorizontal from "../../assets/icons/dots-horizontal.svg";
import { Text } from "lucide-react";
interface Note {
  id: string;
  title: string;
  content: string;
  completed: boolean;
}

const initialNotes: Note[] = [
  {
    id: '1',
    title: 'Make shift & assign',
    content: 'Assign individuals to specific shifts based on availability and role requirements',
    completed: false,
  },
  {
    id: '2',
    title: 'Menu correction',
    content: 'Update the menu to show the dishes and their ingredients clearly. Point out any new cooking methods or dietary options.',
    completed: false,
  },
];

export const PersonalNotepadCard: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const [editingField, setEditingField] = useState<"title" | "content" | null>(null);
  const [editValue, setEditValue] = useState("");
  const titleInputRef = useRef<HTMLInputElement>(null);
  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (editingNote && editingField === "title" && titleInputRef.current) {
      titleInputRef.current.focus();
      titleInputRef.current.select();
    }
    if (editingNote && editingField === "content" && contentTextareaRef.current) {
      contentTextareaRef.current.focus();
      contentTextareaRef.current.select();
    }
  }, [editingNote, editingField]);

  const startEditing = (noteId: string, field: "title" | "content", currentValue: string) => {
    setEditingNote(noteId);
    setEditingField(field);
    setEditValue(currentValue);
  };

  const saveEdit = () => {
    if (editingNote && editingField) {
      setNotes((prev) => prev.map((note) => (note.id === editingNote ? { ...note, [editingField]: editValue } : note)));
    }
    cancelEdit();
  };

  const cancelEdit = () => {
    setEditingNote(null);
    setEditingField(null);
    setEditValue("");
  };

  const toggleComplete = (noteId: string) => {
    setNotes((prev) => prev.map((note) => (note.id === noteId ? { ...note, completed: !note.completed } : note)));
  };

  const handleKeyDown = (e: React.KeyboardEvent, field: "title" | "content") => {
    if (e.key === "Enter") {
      if (field === "content" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        saveEdit();
      } else if (field === "title") {
        e.preventDefault();
        saveEdit();
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      cancelEdit();
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      saveEdit();
    }, 100);
  };

  const limitLines = (text: string, maxLines = 3): string => {
    const lines = text.split("\n");
    return lines.slice(0, maxLines).join("\n");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm w-full flex flex-col">
      {/* Header */}
        <div className="flex flex-col items-center lg:flex-row lg:items-center px-4 pt-4 pb-2 justify-between gap-4">
            <h2 className="text-lg font-semibold text-neutral-900">
              Personal Notepad
            </h2>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded hover:bg-gray-100">
              <ExternalLink className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 rounded hover:bg-gray-100">
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-200" />
        <div className="p-6">
          <div className="px-4 space-y-8">
            <div className="px-4 space-y-8">
            {notes.map((note) => (
              <div key={note.id}  className={`flex items-start gap-3 p-2 rounded-lg transition-colors ${
                editingNote === note.id ? "bg-gray-100" : ""
              }`}>
                <div className="flex-none">
                  <Checkbox
                    checked={note.completed}
                    onCheckedChange={() => toggleComplete(note.id)}
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  {/* Title */}
                  {editingNote === note.id && editingField === "title" ? (
                    <input
                      ref={titleInputRef}
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, "title")}
                      onBlur={handleBlur}
                      className="font-medium w-full border-none outline-none bg-white rounded-md px-2 py-1 text-base"
                    />
                  ) : (
                    <p
                      className={`font-medium ${note.completed ? "line-through text-gray-500" : ""} cursor-text`}
                      onClick={() => startEditing(note.id, "title", note.title)}
                    >
                      {note.title || <span className="text-gray-400">Add a title...</span>}
                    </p>
                  )}

                  {/* Content */}
                  {editingNote === note.id && editingField === "content" ? (
                    <div className="relative">
                      {/* Show icon only on large screens */}
                      <Text className="hidden lg:block absolute w-4 h-4 top-5 left-2 -translate-y-1/2 pointer-events-none" />
                      <textarea
                      ref={contentTextareaRef}
                      value={editValue}
                      onChange={(e) => setEditValue(limitLines(e.target.value))}
                      onKeyDown={(e) => handleKeyDown(e, "content")}
                      onBlur={handleBlur}
                      rows={Math.min(editValue.split("\n").length, 3)}
                      className="text-sm w-full pl-10 border-none outline-none rounded-md pr-2 py-2 bg-white resize-none leading-relaxed"
                    />
                    </div>
                  ) : (
                    <p
                      className={`text-sm text-muted-foreground whitespace-pre-line ${note.completed ? "line-through text-gray-400" : ""} cursor-text`}
                      onClick={() => startEditing(note.id, "content", note.content)}
                    >
                      {note.content || <span className="text-gray-400">Add details...</span>}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          </div>
      </div>
    </div>
  );
};
