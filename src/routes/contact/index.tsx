import { createFileRoute } from '@tanstack/react-router'
import React from 'react';
//import { useForm } from 'react-hook-form';
//import {type ContactFormData, contactSchema} from "@/schemas/contactSchema.ts";
//import {zodResolver} from "@hookform/resolvers/zod";

export const Route = createFileRoute('/contact/')({
  component: RouteComponent,
})

function RouteComponent() {

  /*const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: 'onBlur',
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    alert(`${data.fullName} you form has been submitted successfully.`)
    reset()
  }

  const onError = (error: Error | undefined) => {

  }*/

  return <div>Hello "/contact/"!</div>

}
