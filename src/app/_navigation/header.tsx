import Image from 'next/image';
import Link from 'next/link';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { homePath } from '@/paths';

const Header = () => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex w-full items-center gap-2 px-4">
        <div className="flex flex-1 items-center justify-between">
          <SidebarTrigger className="-ml-1" />

          <Link href={homePath()}>
            <div className="mt-1 flex flex-1 flex-col items-center justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/logos/logo-blank.png`}
                alt="Logo of a purple and yellow toolbox."
                width={42}
                height={42}
                loading="eager"
                priority
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
