import { Document, Page, pdfjs } from 'react-pdf';
import * as Dialog from '@radix-ui/react-dialog';

import { useState } from 'react'

import { X } from 'phosphor-react'

import englishCV from '../assets/pdf/en_2023_CVITAE_WellingtonGustavoAndradeSerrano.pdf'
import portugueseCV from '../assets/pdf/pt_2023_CVITAE_WellingtonGustavoAndradeSerrano.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface ModalProps {
  title: string
}

interface DocumentProps {
  numPages: number
}

export function ModalCV({ title }: ModalProps) {
  const [numPages, setNumPages] = useState<number|null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: DocumentProps) {
    setNumPages(numPages);
  }

  return (
    <Dialog.Root>

      <Dialog.Trigger asChild>
        <button className="flex justify-center items-center gap-2 w-36 h-11 sm:w-72 sm:h-20 bg-[#FFE071] text-[#3D3D3D] text-sm sm:text-2xl rounded-xl hover:opacity-90 transition-opacity">
          { title }
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        
        <Dialog.Overlay className="bg-black opacity-75 data-[state=open]:transition-opacity fixed inset-0" />

        <Dialog.Content className=" w-96 h-fit text-[#3D3D3D] dark:text-[#F1F2F4] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white dark:bg-[#0C151D] p-10 focus:outline-none">
          <p className='mb-6 text-lg font-bold'>Versions:</p>
          <div className='flex flex-col ml-4 justify-start items-start gap-2 italic'>
            <a href={ englishCV } target='_blank' className='hover:opacity-80 transition-opacity'>English</a>
            <a href={ portugueseCV } target='_blank' className='hover:opacity-80 transition-opacity'>Português</a>
          </div>
          
          {/* <object data={ englishCV } type="application/pdf" width="100%" height="100%">
          </object> */}

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}