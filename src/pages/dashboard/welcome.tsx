export default function Welcome({ data }) {
    return (
        <div className="flex flex-col items-center justify-center mb-5">
            <h1 className="mt-5 my-5 text-center text-2xl"> Hello, {data?.user?.name}</h1>
            <p className="text-sm text-gray-500 text-center">Welcome to RetinaInspect AI, your diabetic retinopathy detection solution. Let's safeguard your vision and make a difference together.</p>
        </div>
    );
}