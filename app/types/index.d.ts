interface Notification {
  id: string;
  type: 'error' | 'alert' | 'info' | 'success';
  message: string;
}
