

const EmptyStack = () => {
    return (
        <div>
            <div>
                <p className="text-sm text-slate-500 font-extralight leading-relaxed mb-3">
                    No technologies selected yet.
                </p>
            </div>

            {/* Dashed Empty State Box */}
            <div className="w-full border-[1.5px] border-dashed border-slate-200 rounded-[20px] py-3.5 flex items-center justify-center">
                <p className="textarea-lg text-slate-400 font-normal">
                    Your stack is empty.
                </p>
            </div>
            
        </div>
    );
};

export default EmptyStack;