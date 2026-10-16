import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form';
import {type ContactFormData, contactSchema} from "@/schemas/contactSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { toast } from 'sonner';

export const Route = createFileRoute('/contact/')({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: "SageShop | Contact"}
    ]
  })
})

function RouteComponent() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur'
  });

  const onSubmit = () => {
    toast("Message has been sent!")
    reset()
  }


  return (
      <div className="flex flex-col md:flex-row justify-center md:items-start mx-2">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-lg md:max-w-xl w-full">
          <h2 className="text-4xl text-center  my-4">Contact Us:</h2>
          <p className=" text-center  my-4">Please fill out the form below if you have any feedback for us or any other issues we can solve for you. </p>
         <FieldGroup >
           <Field>
             <FieldLabel htmlFor="fullName">Your full name:</FieldLabel>
             <InputGroup>
               <InputGroupInput id="fullName" {...register('fullName')} aria-invalid={errors.fullName ? 'true' : 'false'} aria-describedby="fullNameError" placeholder="Your full name..."  />
             </InputGroup>
             {errors.fullName && (
                 <p
                     id="fullNameError"
                     role="alert"
                     className="text-red-500 text-sm">
                   {errors.fullName.message}
                 </p>
             )
             }
           </Field>
           <Field>
             <FieldLabel htmlFor="subject">Subject</FieldLabel>
             <InputGroup>
               <InputGroupInput id="subject" {...register('subject')} aria-invalid={errors.subject ? 'true' : 'false'} aria-describedby="subjectError" placeholder="Subject"  />
             </InputGroup>
             {errors.subject && (
                 <p
                     id="subjectError"
                     role="alert"
                     className="text-red-500 text-sm">
                   {errors.subject.message}
                 </p>
             )
             }
           </Field>
           <Field>
             <FieldLabel htmlFor="email">Email</FieldLabel>
             <InputGroup>
               <InputGroupInput id="email" type="email" {...register('email')} aria-invalid={errors.email ? 'true' : 'false'} aria-describedby="emailError" placeholder="Your email"  />
             </InputGroup>
             {errors.email && (
                 <p
                     id="emailError"
                     role="alert"
                     className="text-red-500 text-sm">
                   {errors.email.message}
                 </p>
             )
             }
           </Field>
           <Field>
             <FieldLabel htmlFor="message">Message</FieldLabel>
               <InputGroup>
                 <InputGroupTextarea id="message" {...register('message')} aria-invalid={errors.message ? 'true' : 'false'} aria-describedby="messageError" placeholder="Message"/>
               </InputGroup>
             {errors.message && (
                 <p
                     id="messageError"
                     role="alert"
                     className="text-red-500 text-sm">
                   {errors.message.message}
                 </p>
             )
             }
           </Field>

         </FieldGroup>
          <Button className="my-5 w-full" type="submit">Send</Button>
        </form>
      </div>

  )
  
  

}
