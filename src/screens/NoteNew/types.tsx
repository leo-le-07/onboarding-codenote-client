export interface NoteNewProps {
  history: Object;
}

export interface NoteNewState {
  note: {
    attachment: string;
  };
  content: string;
  attachmentURL: string;
  isLoading: boolean;
}
