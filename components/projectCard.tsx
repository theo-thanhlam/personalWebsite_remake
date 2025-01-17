"use client";
import { useRef } from "react";

const ProjectCard = ({
  name,
  description,
  markdownContent,
}: {
  name: string;
  description: string;
  markdownContent: string;
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <>
      <div
        className=" bg-zinc-800 w-fit sm:w-full h-auto shadow-xl cursor-pointer transition duration-200 hover:scale-110 hover:border-zinc-500 border border-transparent rounded"
        onClick={openModal}
      >
        <div className="flex flex-col p-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-extrabold leading-tight">{name}</h2>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/pastel-glyph/F4F4F5/external-link--v1.png"
              alt="external-link--v1"
            />
          </div>
          <span>{description}</span>
        </div>
      </div>

      <dialog ref={modalRef} className="modal modal-middle backdrop-blur-md">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="py-4 prose prose-sm sm:prose-base">
            <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
          </div>
          <form method="dialog" className="modal-action">
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ProjectCard;
