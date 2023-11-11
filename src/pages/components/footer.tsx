export default function Footer() {
    const date = new Date();
    
    return (
        <p className="mt-8 text-center text-sm text-gray-600">
            By RetinaInspect-AI @{date.getFullYear()}
        </p>
    );
}