import { ReactChild } from 'react';
import { Snippets as PlayroomSnippets } from 'sku/playroom';
import { Optional } from 'utility-types';
import { Source } from '../../utils/source.macro';
export interface BraidSnippet extends Omit<Optional<PlayroomSnippets[number], 'group'>, 'code'> {
    code: Source<ReactChild>;
}
export declare type Snippets = Array<BraidSnippet>;
