/* eslint-disable @typescript-eslint/no-explicit-any */
const Modal = ({ confirmDelete }: any) => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4 text-2xl font-bold text-red-600">
            Are you sure to delete?
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={confirmDelete} className="btn font-bold">
                Yes
              </button>
              <button className="btn mx-8 font-bold">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
