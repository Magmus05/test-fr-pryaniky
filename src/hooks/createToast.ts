import { toast } from 'react-toastify';

export default function createToast(type: 'error' | 'info' | 'success', msg: string) {
  toast[type](msg);
}
