import './index.css';

export default () => (
    <div className="grid grid-cols-1 items-center justify-items-center">
        <div className="">
            <h3 className="text-lg font-bold font-medium text-warm-gray-900">Thank you for your Submission!</h3>
        </div>
        <div>
            <p className="text-lg text-warm-gray-800">
                We appreciate your feedback and will get back to you as soon as possible.
            </p>
        </div>
       <div>
           <a href="/">
               <button
                   type="button"
                   className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 rounded-md text-white bg-blue-500 border-blue-500
                md:border-2 hover:bg-warm-gray-50 hover:text-blue-500 transition ease-out duration-500 sm:w-auto shadow:sm"
               >
                   Return Home
               </button>
           </a>
       </div>

    </div>
);