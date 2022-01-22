/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
// import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';


import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';     // <--- ADDED
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
// import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageBlock from '@ckeditor/ckeditor5-image/src/imageblock';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';




import '../theme/theme.css';

export default class BalloonEditor extends BalloonEditorBase { }

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	GeneralHtmlSupport,
	// SourceEditing,
	Alignment,
	HorizontalLine,
	HtmlEmbed,
	//
	Essentials,
	UploadAdapter,
	Autoformat,
	BlockToolbar,
	Bold,
	Italic,
	BlockQuote,
	// CKFinder,
	// CloudServices,
	// EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,

	//
	ImageInsert,
	ImageResize,
	ImageBlock,
	//
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	blockToolbar: [
		'heading',
		'|',
		'alignment',
		'bulletedList',
		'numberedList',
		'outdent',
		'indent',
		'|',
		'undo',
		'redo',
		'|',
		'horizontalLine',
		'uploadImage',
		'blockQuote',
		'insertTable',
		'mediaEmbed',
		'|',
		'htmlEmbed'
	],
	toolbar: {
		items: [
			'bold',
			'italic',
			'link'
		]
	},
	image: {
		toolbar: [
			{
				name: "semantical",
				items: [
					'imageStyle:inline',
					'imageStyle:block',
					'imageStyle:side',
				],
				defaultItem: 'imageStyle:inline'
			},
			{
				name: "presentational",
				items: [
					'imageStyle:alignLeft',
					'imageStyle:alignRight',
				],
				defaultItem: 'imageStyle:alignLeft'
			},
			{
				name: "presentational2",
				items: [
					'imageStyle:alignBlockLeft',
					'imageStyle:alignBlockRight',
					'imageStyle:alignCenter',
				],
				defaultItem: 'imageStyle:alignBlockLeft'
			},
			'toggleImageCaption',
			'imageTextAlternative',
			'resizeImage'
		],
		resizeUnit: "%",
		resizeOptions: [{
			name: 'resizeImage:original',
			value: null
		},
		{
			name: 'resizeImage:50',
			value: '25'
		},
		{
			name: 'resizeImage:50',
			value: '50'
		},
		{
			name: 'resizeImage:75',
			value: '75'
		},
		{
			name: 'resizeImage:75',
			value: '100'
		}]
	},
	htmlEmbed: {
		showPreviews: true,
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
			// { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
			// { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
