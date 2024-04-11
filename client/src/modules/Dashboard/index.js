import React, { useState } from 'react'
import profileDp from "../../assets/profileDp.png"
import Input from "../../components/Input"
const Dashboard = () => {
    const [message, setMessage] = useState("");
    const contacts = [
        {
            name: "John",
            status: "Available",
            img: profileDp
        },
        {
            name: "Marry",
            status: "Available",
            img: profileDp
        },
        {
            name: "Alexander",
            status: "Available",
            img: profileDp
        },
        {
            name: "John",
            status: "Available",
            img: profileDp
        },
        {
            name: "Marry",
            status: "Available",
            img: profileDp
        },
        {
            name: "Alexander",
            status: "Available",
            img: profileDp
        },
        {
            name: "John",
            status: "Available",
            img: profileDp
        },
        {
            name: "Marry",
            status: "Available",
            img: profileDp
        },
        {
            name: "Alexander",
            status: "Available",
            img: profileDp
        },
    ]
    return (
        <div className='w-screen flex'>
            {/*This is sidebar*/}
            <div className='h-screen  w-[25%] bg-secondary overflow-y-auto ' style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
                <div className='flex mx-8 items-center my-8'>
                    <div className='border border-primary  rounded-full overflow-hidden' ><img alt='' width={40} height={40} src={profileDp}></img></div>
                    <div className='ml-8'>
                        <h3 className='text-2xl'>Random Name</h3>
                        <p className='text-lg font-light'>random text</p>
                    </div>
                </div>
                <hr />
                <div className='ml-14 mt-10'>
                    <div className='text-primary text-lg'>Message</div>
                    <div>
                        {contacts.map(({ name, status, img }) => {
                            return <div className='flex  items-center my-8 py-4  border-b border-b-gray-300'>
                                <div className='cursor-pointer flex items-center'>
                                    <div className=''><img alt='' width={30} height={30} src={img}></img></div>
                                    <div className='ml-8'>
                                        <h3 className='text-lg '>{name}</h3>
                                        <p className='text-sm font-light text-gray-600'>{status}</p>
                                    </div>
                                </div>
                            </div>;
                        })}
                    </div>

                </div>
            </div>
            <div className='h-screen w-[50%] bg-white flex flex-col items-center'>
                <div className='w-[75%] bg-secondary h-[80px] mt-4 rounded-full flex items-center px-14 '>
                    <div className='cursor-pointer border border-primary rounded-full overflow-hidden'><img src={profileDp} width={40} height={40} alt='' /></div>
                    <div className='ml-6 mr-auto'>
                        <h3 className='text-lg'>Alexander</h3>
                        <p className='text-sm font-light text-gray-600'>Online</p>
                    </div>
                    <div className='flex'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"

                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#1476ff"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            // Add CSS class for hover effect
                            className="icon icon-tabler icon-tabler-phone-call mr-4 cursor-pointer hover:fill-current hover:text-black hover:scale-105"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            <path d="M15 7a2 2 0 0 1 2 2" />
                            <path d="M15 3a6 6 0 0 1 6 6" />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-brand-zoom cursor-pointer hover:fill-current hover:text-black hover:scale-105"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#1476ff"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M17.011 9.385v5.128l3.989 3.487v-12z" />
                            <path d="M3.887 6h10.08c1.468 0 3.033 1.203 3.033 2.803v8.196a.991 .991 0 0 1 -.975 1h-10.373c-1.667 0 -2.652 -1.5 -2.652 -3l.01 -8a.882 .882 0 0 1 .208 -.71a.841 .841 0 0 1 .67 -.287z" />
                        </svg>
                    </div>
                </div>
                <div className='w-full overflow-y-scroll border-b' style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
                    <div className='px-10 py-14 '>

                        {/*This is a message*/}
                        <div className='flex'>
                            <div className='border border-primary p-[2px] rounded-full w-[35px] h-[35px]'><img alt='' width={30} height={30} src={profileDp}></img></div>
                            <div className='max-w-[40%]  bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6 mt-4 ml-1 '>
                                This is the random text i use for the testing purposes.
                            </div>
                        </div>
                        {/*This is a message*/}
                        <div className='flex'>
                            <div className='max-w-[40%]  bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 mb-6 mt-4 mr-1 text-white'>
                                This is the random text i use for the testing purposes.
                            </div>
                            <div className='border border-primary p-[2px] rounded-full w-[35px] h-[35px]'><img alt='' width={30} height={30} src={profileDp}></img></div>
                        </div>
                        {/*This is a message*/}
                        <div className='flex'>
                            <div className='border border-primary p-[2px] rounded-full w-[35px] h-[35px]'><img alt='' width={30} height={30} src={profileDp}></img></div>
                            <div className='max-w-[40%]  bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6 mt-4 ml-1 '>
                                This is the random text i use for the testing purposes.
                            </div>
                        </div>
                        {/*This is a message*/}
                        <div className='flex'>
                            <div className='max-w-[40%]  bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 mb-6 mt-4 mr-1 text-white'>
                                This is the random text i use for the testing purposes.
                            </div>
                            <div className='border border-primary p-[2px] rounded-full w-[35px] h-[35px]'><img alt='' width={30} height={30} src={profileDp}></img></div>
                        </div>
                        {/*This is a message*/}
                        <div className='flex'>
                            <div className='border border-primary p-[2px] rounded-full w-[35px] h-[35px]'><img alt='' width={30} height={30} src={profileDp}></img></div>
                            <div className='max-w-[40%]  bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6 mt-4 ml-1 '>
                                This is the random text i use for the testing purposes.
                            </div>
                        </div>
                        {/*This is a message*/}
                        <div className='flex'>
                            <div className='max-w-[40%]  bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 mb-6 mt-4 mr-1 text-white'>
                                This is the random text i use for the testing purposes.
                            </div>
                            <div className='border border-primary p-[2px] rounded-full w-[35px] h-[35px]'><img alt='' width={30} height={30} src={profileDp}></img></div>
                        </div>
                        {/*This is a message*/}
                        <div className='flex'>
                            <div className='border border-primary p-[2px] rounded-full w-[35px] h-[35px]'><img alt='' width={30} height={30} src={profileDp}></img></div>
                            <div className='max-w-[40%]  bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6 mt-4 ml-1 '>
                                This is the random text i use for the testing purposes.
                            </div>
                        </div>
                        {/*This is a message*/}
                        <div className='flex'>
                            <div className='max-w-[40%]  bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 mb-6 mt-4 mr-1 text-white'>
                                This is the random text i use for the testing purposes.
                            </div>
                            <div className='border border-primary p-[2px] rounded-full w-[35px] h-[35px]'><img alt='' width={30} height={30} src={profileDp}></img></div>
                        </div>
                        {/*This is a message*/}
                        <div className='flex'>
                            <div className='border border-primary p-[2px] rounded-full w-[35px] h-[35px]'><img alt='' width={30} height={30} src={profileDp}></img></div>
                            <div className='max-w-[40%]  bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6 mt-4 ml-1 '>
                                This is the random text i use for the testing purposes.
                            </div>
                        </div>
                        {/*This is a message*/}
                        <div className='flex'>
                            <div className='max-w-[40%]  bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 mb-6 mt-4 mr-1 text-white'>
                                This is the random text i use for the testing purposes.
                            </div>
                            <div className='border border-primary p-[2px] rounded-full w-[35px] h-[35px]'><img alt='' width={30} height={30} src={profileDp}></img></div>
                        </div>

                    </div>
                </div>
                <div className='p-14 w-full flex items-center'>
                    <Input placeholder='Type a message...' className='w-full' inputClassNames='w-full p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none' value={message} onChange={(e) => { setMessage(e.target.value) }}></Input>
                    <div className='ml-4 cursor-pointer rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send-2" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1476ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
                            <path d="M6.5 12h14.5" />
                        </svg>
                    </div>
                    <div className='ml-4 cursor-pointer rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1476ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 15l6 -6" />
                            <path d="M11 6l.463 -.536a5 5 0 0 1 7.072 0a4.993 4.993 0 0 1 -.001 7.072" />
                            <path d="M12.603 18.534a5.07 5.07 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                            <path d="M16 19h6" />
                            <path d="M19 16v6" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='h-screen w-[25%]'></div>
        </div>
    )
}

export default Dashboard