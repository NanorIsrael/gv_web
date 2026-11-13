import { useState, type FormEvent } from 'react';
import { profile } from '../data/content';
import { Modal } from './Modal';

type ContactProps = {
  open: boolean;
  onClose: () => void;
};

export default function Contact({ open, onClose }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Let's work together">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
            Full name
          </label>
          <input
            id="contact-name"
            className="field"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            className="field"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
            Project details
          </label>
          <textarea
            id="contact-message"
            className="field resize-y"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <p className="text-xs text-muted">Sending opens your email app with this message ready to go.</p>
        <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
          <button type="button" className="btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn-primary">
            Send message
          </button>
        </div>
      </form>
    </Modal>
  );
}
