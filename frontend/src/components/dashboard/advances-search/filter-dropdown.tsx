import {FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";

// Components
import {
    MultiSelect,
    MultiSelectContent,
    MultiSelectGroup, MultiSelectItem,
    MultiSelectTrigger,
    MultiSelectValue
} from "@/components/ui/multi-select";

//
interface FilterDropdownItemProps {
    label: string;
    options: string[];
    name: string;
    form: any;
}

export default function FilterDropdown({label, options, name, form}: FilterDropdownItemProps) {
    return (
        <>
            <FormField
                key={label}
                name={name}
                control={form.control}
                render={({field}) => (
                    <FormItem>
                        <FormLabel className="text-white">{label}</FormLabel>
                        <MultiSelect onValuesChange={field.onChange} values={field.value}>
                            <FormControl>
                                <MultiSelectTrigger className="w-full bg-main-foreground border border-yellow-primary/70 text-white">
                                    <MultiSelectValue placeholder="All" className="placeholder:text-white"/>
                                </MultiSelectTrigger>
                            </FormControl>
                            <MultiSelectContent className="bg-main-foreground text-white" >
                                <MultiSelectGroup className="text-white">
                                    {options.map((item) => (
                                        <MultiSelectItem key={item} value={item.toLowerCase()}>{item}</MultiSelectItem>
                                    ))}
                                </MultiSelectGroup>
                            </MultiSelectContent>
                        </MultiSelect>
                    </FormItem>
                )}
            />

        </>
    )
}