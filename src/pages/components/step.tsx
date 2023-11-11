export default function Step({ step, topic, desciprion }) {
    return (
        <>
            <div className="flex justify-start items-center flex-row mt-1 mb-2">
                <span className="inline-block text-1xl font-bold bg-blue-500 rounded-full w-10 h-10 text-center text-white leading-10">
                    {step}
                </span>
                <span className="inline-block ms-3 text-1xl">
                    {topic}
                </span>
            </div>
            <div className="text-sm mt-2 mb-6">
                {desciprion}
            </div>
        </>
    );
}