import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react'

interface ModalProps {
  title: string
}

export function Modal({ title }: ModalProps) {

  return (
    <Dialog.Root>

      <Dialog.Trigger asChild>
        <button className="flex justify-center items-center gap-2 w-36 h-11 sm:w-72 sm:h-20 bg-[#FFE071] text-[#3D3D3D] text-sm sm:text-2xl rounded-xl hover:opacity-90 transition-opacity">
          { title }
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        
        <Dialog.Overlay className="bg-black opacity-90 data-[state=open]:transition-opacity fixed inset-0" />

        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white dark:bg-[#0C151D] p-[25px] focus:outline-none">
          
          <Dialog.Title className="dark:text-[#F1F2F4] text-[#3D3D3D] text-2xl sm:text-3xl mb-4">
            Send E-mail
          </Dialog.Title>

          <form action="https://formsubmit.co/well.serrano@yahoo.com.br" method="POST">

            <fieldset className="mb-4 gap-5">
              <label className="dark:text-[#A3ABB2] text-[#575757] text-right text-base sm:text-lg" htmlFor="name">
                Name
              </label>
              <input
                className="flex h-9 w-full items-center justify-center rounded-md px-2 bg-[#D7D7D7] dark:bg-white text-base leading-none outline-none focus:shadow-[0_0_0_2px]"
                type='text'
                id="name"
                name="name"
                required
              />
            </fieldset>

            <fieldset className="mb-4 gap-5">
              <label className="dark:text-[#A3ABB2] text-[#575757] text-right text-base sm:text-lg" htmlFor="email">
                Email
              </label>
              <input
                className="flex h-9 w-full items-center justify-center rounded-md px-2 bg-[#D7D7D7] dark:bg-white text-base leading-none outline-none focus:shadow-[0_0_0_2px]"
                type='email'
                name='email'
                id="email"
                required
              />
            </fieldset>

            <fieldset className="mb-4 gap-5">
              <label className="dark:text-[#A3ABB2] text-[#575757] text-right text-base sm:text-lg" htmlFor="message">
                Message
              </label>
              <textarea
                className="flex w-full min-h-[8rem] max-h-40 items-center justify-center rounded-md p-2 bg-[#D7D7D7] dark:bg-white text-base leading-none outline-none focus:shadow-[0_0_0_2px]"
                id="message"
                name="message"
                required
              />
            </fieldset>

            <div className="flex justify-end mt-6">
              <button 
                className="h-8 items-center justify-center rounded-sm px-4 text-white leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                type='submit' 
              >
                Send
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button
              className="absolute flex top-[10px] right-[10px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <X size={28} color='white'/>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}