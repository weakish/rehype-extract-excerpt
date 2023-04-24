import type { Plugin } from 'unified';
import type { Root } from 'hast';
export interface RehypeExtractExcerptOptions {
    /** The var name of the vFile.data export. defaults to `excerpt` */
    name?: string;
    /** The character length to truncate the excerpt. defaults to 140  */
    maxLength?: number;
    /** The ellipsis to add to the excerpt. defaults to `...` */
    ellipsis?: string;
    /** Truncate the excerpt at word boundary. defaults to `true` */
    wordBoundaries?: boolean;
    /** The HTML tag name for the excerpt content. defaults to `p` */
    tagName?: string;
}
declare const rehypeExtractExcerpt: Plugin<[
    RehypeExtractExcerptOptions?
], Root, void>;
export default rehypeExtractExcerpt;
//# sourceMappingURL=index.d.ts.map