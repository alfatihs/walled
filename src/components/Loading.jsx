import { ColorRing } from 'react-loader-spinner'
export default function Loading() {
    return (
        <div className='rounded-xl flex justify-center items-center px-6 py-8 w-full h-full absolute bg-[#dfdfdfbd] '>
            {/* <img src="https://loading.io/assets/mod/spinner/default/lg.gif" alt="loading" /> */}
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
            <h1>Loading...</h1>
        </div>
    )
}