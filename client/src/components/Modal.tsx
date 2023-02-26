import React from 'react'
import { Modal } from 'flowbite-react';

export default function ModalContainer({ showModal, setShowModal, modalContent, setModalContent }) {
  return (
    
      <Modal show={showModal} dismissible={true} position="center-right" onClose={() => setShowModal(false)} className="bg-slate-700"
      >
          <Modal.Header className='bg-[#8CA085] border-0'>
              <p className='font-bold text-white'>{`${modalContent?.name} ${modalContent?.entity}`}</p>
          </Modal.Header>
          <Modal.Body className='bg-zinc-500 border-0'>
              <div className="space-y-6 p-6">
                  <p className="text-base leading-relaxed text-white pb-4">
                      {modalContent.description}
                  </p>
                  
                  {modalContent.techs && modalContent?.techs.map((el) => <span className="text-base leading-relaxed text-black">{el } </span>)}
                  
              </div>
          </Modal.Body>
          
      </Modal>
  )
}
