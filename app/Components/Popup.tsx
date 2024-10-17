// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../state/store"; // Ensure this path is correct
// import { toggleModal } from "../state/slice/modalSlice"; // Correct import for the slice

// const Popup: React.FC = () => {
//     // Access the modal state using the correct path (state.modal)
//     const isModalOpen = useSelector((state: RootState) => state.modal.isModalOpen);
//     const dispatch = useDispatch();

//     if (!isModalOpen) return null; // Conditionally render if modal is not open

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark bg-opacity-70">
//             <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow">
//                 <div className="flex justify-between p-4 border-b rounded-t">
//                     <h3 className="text-lg font-semibold">Book Appointment</h3>
//                     <button onClick={() => dispatch(toggleModal())}>
//                         <svg className="w-3 h-3" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
//                             />
//                         </svg>
//                         <span className="sr-only">Close modal</span>
//                     </button>
//                 </div>
//                 <div className="p-4">
//                     <img
//                         src="/path-to-your-image.jpg"
//                         alt="Appointment"
//                         className="w-full h-48 object-cover rounded-lg mb-4"
//                     />
//                     <button
//                         className="w-full text-white bg-red-600 py-2.5 rounded-lg"
//                         onClick={() => dispatch(toggleModal())}
//                     >
//                         Book Appointment
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Popup;