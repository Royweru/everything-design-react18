



export const EmailFeedbackModal = ({name}:{
    name?:string
}) => {
  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn">open modal</button>
<dialog id="my_modal_3" className="modal ">
  <div className="modal-box bg-white">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hello! {name}</h3>
    <p className="py-4">Your message has been received we will be in touch</p>
  </div>
</dialog>
    </div>
  )
}
