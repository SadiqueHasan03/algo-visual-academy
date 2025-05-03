
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatarUrl?: string;
}

const TestimonialCard = ({ quote, name, title, avatarUrl }: TestimonialCardProps) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex gap-4 mb-4 items-center">
        <Avatar>
          {avatarUrl && <AvatarImage src={avatarUrl} alt={name} />}
          <AvatarFallback className="bg-algo-secondary text-white">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
      <blockquote className="italic text-gray-700">"{quote}"</blockquote>
    </div>
  );
};

export default TestimonialCard;
