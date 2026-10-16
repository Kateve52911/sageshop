import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import {APIError} from "@/services/api/apiError.ts";

/** Props for `ErrorMessage`. */
interface ErrorMessageProps {
    /** The error to show. Its `message` is displayed to the user. */
    error: APIError
}

/**
 * Error box shown when something goes wrong, e.g. when products can't be fetched.
 */
export default function ErrorMessage({ error }: ErrorMessageProps) {
    return (
        <div className={"grid w-full mx-auto my-10 max-w-md items-start gap-4"}>
            <Alert variant={'destructive'}>
                <AlertTitle>
                    Something went wrong
                </AlertTitle>
                <AlertDescription>
                    {error.message}
                </AlertDescription>
            </Alert>
        </div>
    )
}