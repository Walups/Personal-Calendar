import * as Dialog from '@radix-ui/react-dialog';
import InputText from './InputText';

function NewEvent({isOpen, onOpenChange}){ 

    return(
        <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>

            <Dialog.Portal>

                <Dialog.Overlay className= '  fixed inset-0 ' />

                <Dialog.Content className='
                
                    fixed
                    z-10                    
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-full
                    max-w-[540px]
                    py-3
                    bg-gray-100
                    rounded-md
                    shadow-lg
                    overflow-hidden
                    border-0


                '>

                    <div className=' p-5  flex flex-col gap-2 '>

                        <h1 className='text-center text-3xl text-'>Novo evento</h1>

                        <form className='flex flex-col gap-2'>

                            <InputText  placeholder='Titulo da Tarefa' />
                            

                            <div className='flex flex-row gap-20  w-full'>
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor="">Data e hora inicial</label>
                                    <input type="date" />
                                    <input type="time" />
                                </div>
                            
                            <div className='flex flex-col gap-1'>
                                    <label htmlFor="">Data e hora final</label>
                                    <input type="date" />
                                    <input type="time" />
                            </div>
                            </div>
                            <InputText className='' placeholder='Descrição' />

                        </form>

                        <button>Salvar</button>

                    </div>

                </Dialog.Content>

                <Dialog.Close asChild>

                    <button>Close</button>

                </Dialog.Close>

            </Dialog.Portal>

        </Dialog.Root>
    )
}

export default NewEvent