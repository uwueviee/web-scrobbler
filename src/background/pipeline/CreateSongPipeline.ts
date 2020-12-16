import { Song } from '@/background/object/song';
import { Processor } from '@/background/pipeline/Processor';
import { FieldNormalizer } from '@/background/pipeline/processor/FieldNormalizer';
import { SongPipeline } from '@/background/pipeline/SongPipeline';

export function CreateSongPipeline(): Processor<Song> {
	const processors: Processor<Song>[] = [new FieldNormalizer()];
	return new SongPipeline(processors);
}
