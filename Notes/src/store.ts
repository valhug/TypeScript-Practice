import { create } from 'zustand';

export interface Note {
    id: number;
    title: string;
    content: string;
}

export interface NoteStore {
    notes: Note[];
    addNote: (note: Note) => void;
    updateNote: (id: number, updateNote: Partial<Note>) => void;
    removeNote: (id: number) => void;
}

const useStore = create<NoteStore>((set) => ({
    notes: [],
    addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
    updateNote: (id, updateNote) => set((state) => ({ notes: state.notes.map((note) => note.id === id ? { ...note, ...updateNote } : note),})),
    removeNote: (id) => set((state) => ({ notes: state.notes.filter((note) => note.id !== id) })),
}));

export default useStore;