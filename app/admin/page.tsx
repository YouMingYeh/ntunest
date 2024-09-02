"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { id, init, tx } from "@instantdb/react";

// ID for app: ntunest
const APP_ID = "cb675865-1a98-43da-8cb4-4f68d3c93f67";

// Optional: Declare your schema for intellisense!
type Contact = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

type Schema = {
  contacts: Contact;
};

const db = init<Schema>({ appId: APP_ID });

export default function Admin({
  searchParams,
}: {
  searchParams: {
    token: string;
  };
}) {
  const { isLoading, error, data } = db.useQuery({ contacts: {} });
  if (isLoading) {
    return <div>Fetching data...</div>;
  }
  const { contacts } = data as { contacts: Contact[] };
  return (
    <div className="p-16">
      <Table>
        <TableCaption>A list of contacts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>
              First Name
            </TableHead>
            <TableHead>
              Last Name
            </TableHead>
            <TableHead>
              Email
            </TableHead>
            <TableHead>
              Subject
            </TableHead>
            <TableHead>
              Message
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            contacts.map((contact, index) => (
              <TableRow key={index}>
                <TableCell>{contact.firstName}</TableCell>
                <TableCell>{contact.lastName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.subject}</TableCell>
                <TableCell>{contact.message}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
}
