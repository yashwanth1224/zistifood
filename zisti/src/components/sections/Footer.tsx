import { Icon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { StoreButtons } from "@/components/StoreButtons";
import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-black px-4 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <Logo className="text-4xl" />
          {footer.columns.map((group) => (
            <div key={group[0].heading} className="flex flex-col gap-8">
              {group.map((column) => (
                <div key={column.heading}>
                  <h2 className="text-sm font-semibold uppercase tracking-widest">{column.heading}</h2>
                  <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="hover:text-white">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest">{footer.socialHeading}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {footer.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="grid size-9 place-items-center rounded-full bg-white text-black transition hover:bg-brand hover:text-white"
                  >
                    <Icon name={social.icon} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
            <StoreButtons stacked className="mt-6" />
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>{footer.copyright}</p>
          <ul className="flex gap-6">
            {footer.legal.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
