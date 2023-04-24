import { toString } from 'hast-util-to-string';
import { EXIT, visit } from 'unist-util-visit';
const defaults = {
    name: 'excerpt',
    maxLength: 140,
    ellipsis: '...',
    wordBoundaries: true,
    tagName: 'p'
};
const rehypeExtractExcerpt = (userOptions) => {
    const options = { ...defaults, ...userOptions };
    function truncateExcerpt(str, maxLength, ellipsis, wordBoundaries) {
        if (str.length > maxLength) {
            if (wordBoundaries) {
                return `${str.slice(0, str.lastIndexOf(' ', maxLength - 1))}${ellipsis}`;
            }
            return `${str.slice(0, maxLength)}${ellipsis}`;
        }
        return str;
    }
    return (tree, vfile) => {
        const excerpt = [];
        visit(tree, 'element', (node) => {
            if (node.tagName !== options.tagName) {
                return;
            }
            excerpt.push(truncateExcerpt(toString(node), options.maxLength, options.ellipsis, options.wordBoundaries));
            return EXIT;
        });
        vfile.data[options.name] = excerpt[0];
    };
};
export default rehypeExtractExcerpt;
//# sourceMappingURL=index.js.map