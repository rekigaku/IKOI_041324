// "use client"
// import { useRef } from 'react';
// import { useRouter } from 'next/router'; // 注意: 正しいrouterのインポートパス
// import createCustomer from './createCustomer';

// export default function CreatePage() {
//     const formRef = useRef();
//     const router = useRouter();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData(formRef.current);
//         if (!formData.get("customer_id")) {
//             alert('Customer IDは必須です。');
//             return;
//         }
        
//         await createCustomer(formData);
//         router.push(`./create/confirm?customer_id=${formData.get("customer_id")}`);
//     };

//     return (
//         <div className="flex justify-center items-center h-screen">
//             <div className="card bordered bg-gray-100 border-blue-200 border-2 max-w-4xl m-4 shadow-lg">
//                 <div className="m-4 p-4 bg-white rounded-lg shadow-inner">
//                     <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
//                         <div className="card-body">
//                             <button type="button" className="btn btn-blue-500 m-2"
//                                     onClick={() => console.log('あいさつをした')}>あいさつをした</button>
//                             <button type="button" className="btn btn-blue-500 m-2"
//                                     onClick={() => console.log('笑顔で接した')}>笑顔で接した</button>
//                             <button type="button" className="btn btn-blue-500 m-2"
//                                     onClick={() => console.log('遮らずに相手の話を聞いた')}>遮らずに相手の話を聞いた</button>
//                             <button type="button" className="btn btn-blue-500 m-2"
//                                     onClick={() => console.log('目を見て話した')}>目を見て話した</button>
//                             <button type="button" className="btn btn-blue-500 m-2"
//                                     onClick={() => console.log('状況や進捗確認の声かけをした')}>状況や進捗確認の声かけをした</button>
//                         </div>
//                         <div className="flex justify-center">
//                             <button type="submit" className="btn btn-primary m-4">送信</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }
