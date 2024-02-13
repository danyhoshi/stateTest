import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea
        value={message[contact.id]}
        placeholder={"Chatear con " + contact.name}
        onChange={(e) => {
          // TODO: Despachar edited_message
          dispatch({
            type: "edited_message",
            contactId: contact.id,
            message: e.target.value,
          });
          // (Lee el valor del input en e.target.value)
        }}
      />
      <br />
      <button
        onClick={() => {
          alert(`Enviando "${message[contact.id]}" a ${contact.email}`);
          dispatch({
            type: "sent_message",
            contactId: contact.id,
            message: "",
          });
        }}
      >
        Enviar a {contact.email}
      </button>
    </section>
  );
}
