import * as Dialog from '@radix-ui/react-dialog';

function NewEvent({isOpen, onOpenChange}){ 

    return(
        <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>

            <Dialog.Portal>

                <Dialog.Overlay className="fixed inset-0  bg-opacity-50" />

                <Dialog.Content>

                    <h1>Funciona</h1>

                </Dialog.Content>

                <Dialog.Close asChild>

                    <button>Close</button>

                </Dialog.Close>

            </Dialog.Portal>

        </Dialog.Root>
    )
}

export default NewEvent