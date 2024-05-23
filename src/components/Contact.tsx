import { Modal } from "./Modal";

type ContactProps = {
	toggleModal: boolean
	setToggleModal:(bool: boolean) => void
}
  
export default function Contact({toggleModal, setToggleModal}: ContactProps) {
	const handleCancel = () => {
		setToggleModal(true)
	}


	return (
	  <Modal xtraclass="" hidden={toggleModal}>
		<form action="" className="text-sm">
			<fieldset>
				<div className="text-sm py-2">
				<label htmlFor="email" className="flex flex-start">
					Full name
				</label>
				<input id={"email"} type="text" className="p-2 w-full border-2 border-black " />
				</div>
				<div className="text-sm py-2">
				<label htmlFor="email" className="flex flex-start">
					Email
				</label>
				<input id={"email"} type="email" className="p-2 w-full border-2 border-black " />
				</div>
				<div className="text-sm py-2">
				<label htmlFor="email" className="flex flex-start">
					Message
				</label>
				<textarea id={"email"} className="p-2 w-full border-2 border-black" rows={5} />
				<div className="flex py-1 justify-center">
					<button className="mr-2 w-[150px] bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded my-2 border border-black" onClick={handleCancel}>Cancel</button>
					<button className="w-[150px] bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded mr-4 my-2" onClick={() => null}>Send</button>
				</div>
				</div>
			</fieldset>		
		</form>
	  </Modal>
	);
  }
  