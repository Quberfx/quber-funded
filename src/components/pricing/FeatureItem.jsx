export default function FeatureItem({ text, icon }) {
    console.log(text);

    return (
        <div className="flex items-center gap-3 text-gray-700">
            <img src={icon} className="w-6 h-6" />
            <span>{text}</span>
        </div>
    );
}
