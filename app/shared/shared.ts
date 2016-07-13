import SnippetService from "./services/snippet.service";
import Snippet from "./interfaces/snippet";
import Task from "./interfaces/task";
import Step from "./interfaces/step";

/**
 * Created by peikanghu on 7/11/16.
 */

const SHARED_PROVIDERS: any[] = [
	SnippetService
]

export
{
	Task,
	Step,
	Snippet,

	SnippetService,
	SHARED_PROVIDERS
}