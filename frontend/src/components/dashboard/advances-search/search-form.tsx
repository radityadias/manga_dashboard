"use client"

// State
import {useState} from "react";

// Forms
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"

// Components
import SearchBar from "@/components/dashboard/advances-search/search-bar";
import AdvanceFilters from "@/components/dashboard/advances-search/advance-filters";
import {Button} from "@/components/ui/button";

// Icons
import {ChevronDownIcon, ChevronUpIcon} from "lucide-react";

const formSchema = z.object({
    query: z.string(),
    sortBy: z.array(z.string()),
    genre: z.array(z.string()),
    status: z.array(z.string()),
    language: z.array(z.string()),
    rating: z.array(z.string()),
})

export default function SearchForm() {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            query: "",
            sortBy: [],
            genre: [],
            status: [],
            language: [],
            rating: [],
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <>
            <div className="flex items-center gap-4">
                <div className="w-40">
                    <Button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`flex justify-center w-full border-none ${dropdownOpen ? ('yellow-darken') : ('dark-primary-reverse')}`} variant="outline">
                        {dropdownOpen ? (
                            <ChevronUpIcon className="w-5 h-5" />
                        ) : (
                            <ChevronDownIcon className="w-5 h-5" />
                        )}
                        <p>Filters</p>
                    </Button>
                </div>

                <SearchBar form={form} onSubmit={onSubmit} />
            </div>

            <AdvanceFilters form={form} dropdownOpen={dropdownOpen} onSubmit={onSubmit} />
        </>
    )
}