// interface Pos {
// 	lineStart: number;
// 	lineEnd: number;
// }

// interface BlockSFC {
// 	frontmatter: Pos;
// 	script: Pos;
// 	style: Pos;
// 	template: [
// 		({
// 			content: string;
// 		} & Pos)?
// 	];
// }

// function getFrontMatterRE(lines: string[], pos: Pos): Pos {
// 	let { lineStart, lineEnd } = pos;
// 	// TODO: check frontmatter convention, consider it must in top 1 for now
// 	if (lines.indexOf("---") !== 0) {
// 		return { lineStart, lineEnd };
// 	} else {
// 		lineStart = 1;
// 		lineEnd = lines.lastIndexOf("---") + 1;
// 		for (let i = lineEnd, len = lines.length; i < len; i++) {
// 			if (emptyRE.test(lines[i])) lineEnd++;
// 			else break;
// 		}
// 	}

// 	return { lineStart: 1, lineEnd };
// }

// function getScriptRE(lines: string, pos: Pos): Pos {
// 	let { lineStart, lineEnd } = pos;
// 	if (lines.indexOf("</script>") > -1) {
// 		return { lineStart, lineEnd };
// 	} else {
// 		lineStart = 1;
// 		lineEnd = lines.lastIndexOf("---") + 1;
// 		for (let i = lineEnd, len = lines.length; i < len; i++) {
// 			if (emptyRE.test(lines[i])) lineEnd++;
// 			else break;
// 		}
// 	}

// 	return { lineStart: 1, lineEnd };
// }
// // get the different block of the markdown
// //  e.g frontmatter script-setup and htmls
// export function getBlocks(source: string): BlockSFC {
// 	const blocks: BlockSFC = {
// 		frontmatter: { lineEnd: 0, lineStart: 0 },
// 		script: { lineEnd: 0, lineStart: 0 },
// 		template: [],
// 		style: { lineEnd: 0, lineStart: 0 },
// 	};
// 	const lines = source.trim().split(splitRE);
// 	getFrontMatterRE(lines, blocks.frontmatter);
// }

// export function genMap(mdAST: Token[], generatedAST: []) {}
