'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// shadcn/ui
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// --------------------
// Schema & Types (Yup)
// --------------------
const FormSchema = yup.object({
  name: yup.string().min(2, 'Your name is too short').required('Name is required'),
  email: yup.string().email('Please provide a valid email').required('Email is required'),
  phone: yup.string().min(8, 'Phone is too short').max(20, 'Phone is too long').optional(),
  service: yup.string().required('Select a service'),
  timeline: yup.string().optional(),
  details: yup
    .string()
    .min(10, 'Tell me a bit more about your project')
    .required('Project details are required'),
})

type FormValues = yup.InferType<typeof FormSchema>

const SERVICES = ['Web Development', 'UI/UX Design', 'Branding', 'Consultation', 'Other']

export default function ContactForm() {
  const form = useForm<FormValues>({
    resolver: yupResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      timeline: '',
      details: '',
    },
    mode: 'onChange',
  })

  async function onSubmit(values: FormValues) {
    // TODO: replace with your API route or server action
    // Example call:
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) })
    console.log('Contact submit:', values)
    form.reset()
    alert("Thanks! I'll get back to you soon.")
  }

  return (
    <section className="w-full py-6 mt-4">
      <div className="mx-auto max-w-4xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      className="h-12 rounded-lg bg-zinc-800/60 border-zinc-700 text-white placeholder:text-zinc-400 focus-visible:ring-zinc-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      type="email"
                      {...field}
                      className="h-12 rounded-lg bg-zinc-800/60 border-zinc-700 text-white placeholder:text-zinc-400 focus-visible:ring-zinc-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Phone Number"
                      inputMode="tel"
                      {...field}
                      className="h-12 rounded-lg bg-zinc-800/60 border-zinc-700 text-white placeholder:text-zinc-400 focus-visible:ring-zinc-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Service of Interest */}
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="min-h-12 rounded-lg border-zinc-700 text-white w-full ">
                        <SelectValue placeholder="Service Of Interest" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-zinc-900 border-zinc-700 text-white w-full">
                      {SERVICES.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Timeline */}
            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem className="md:col-span-1">
                  <FormControl>
                    <Input
                      placeholder="Timeline"
                      {...field}
                      className="h-12 rounded-lg bg-zinc-800/60 border-zinc-700 text-white placeholder:text-zinc-400 focus-visible:ring-zinc-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Project Details */}
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem className="md:col-span-1">
                  <FormControl>
                    <Textarea
                      placeholder="Project Details..."
                      {...field}
                      className="min-h-32 rounded-lg bg-zinc-800/60 border-zinc-700 text-white placeholder:text-zinc-400 focus-visible:ring-zinc-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <div className="md:col-span-2 col-span-1 flex justify-end pt-2">
              <Button type="submit" variant={'outline'} className="cursor-pointer min-w-28">
                Send
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  )
}
