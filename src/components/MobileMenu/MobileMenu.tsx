import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/DropDownMenu";
import { MenuIcon, WrenchIcon, FolderIcon, UserIcon } from "lucide-react";
import Button from "../Button/Button";

export default function MobileMenu() {
  return (
    <nav className="fixed right-10 bottom-7 sm:hidden">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="md"
            className="bg-popover rounded-xl"
            aria-label="Navigation menu"
          >
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <a
              href="/"
              onClick={() =>
                window.scroll({
                  top: 180,
                  behavior: "smooth",
                })
              }
            >
              <DropdownMenuItem className="text-lg cursor-pointer hover:bg-accent">
                <UserIcon className="mr-2 size-4" />
                About me
              </DropdownMenuItem>
            </a>
            <a
              href="/tools"
              onClick={() =>
                window.scroll({
                  top: 180,
                  behavior: "smooth",
                })
              }
            >
              <DropdownMenuItem className="text-lg cursor-pointer hover:bg-accent">
                <WrenchIcon className="mr-2 size-4" />
                My tools
              </DropdownMenuItem>
            </a>
            <a
              href="/projects"
              onClick={() =>
                window.scroll({
                  top: 180,
                  behavior: "smooth",
                })
              }
            >
              <DropdownMenuItem className="text-lg cursor-pointer hover:bg-accent">
                <FolderIcon className="mr-2 size-4" />
                My projects
              </DropdownMenuItem>
            </a>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
