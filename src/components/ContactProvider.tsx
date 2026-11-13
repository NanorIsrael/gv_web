import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import Contact from './Contact';

const ContactContext = createContext<() => void>(() => undefined);

/** Lets any component open the contact dialog via `useContact()`. */
export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openContact = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const value = useMemo(() => openContact, [openContact]);

  return (
    <ContactContext.Provider value={value}>
      {children}
      <Contact open={open} onClose={close} />
    </ContactContext.Provider>
  );
}

export const useContact = () => useContext(ContactContext);
