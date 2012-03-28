define(function () {
    'use strict';
    
    var _shortcuts = {
            "title"     : ["TIT2", "TT2"],
            "artist"    : ["TPE1", "TP1"],
            "album"     : ["TALB", "TAL"],
            "year"      : ["TYER", "TYE"],
            "comment"   : ["COMM", "COM"],
            "track"     : ["TRCK", "TRK"],
            "genre"     : ["TCON", "TCO"],
            "picture"   : ["APIC", "PIC"],
            "lyrics"    : ["USLT", "ULT"]
        },
        frames = {
            // v2.2
            "BUF" : "Recommended buffer size",
            "CNT" : "Play counter",
            "COM" : "Comments",
            "CRA" : "Audio encryption",
            "CRM" : "Encrypted meta frame",
            "ETC" : "Event timing codes",
            "EQU" : "Equalization",
            "GEO" : "General encapsulated object",
            "IPL" : "Involved people list",
            "LNK" : "Linked information",
            "MCI" : "Music CD Identifier",
            "MLL" : "MPEG location lookup table",
            "PIC" : "Attached picture",
            "POP" : "Popularimeter",
            "REV" : "Reverb",
            "RVA" : "Relative volume adjustment",
            "SLT" : "Synchronized lyric/text",
            "STC" : "Synced tempo codes",
            "TAL" : "Album/Movie/Show title",
            "TBP" : "BPM (Beats Per Minute)",
            "TCM" : "Composer",
            "TCO" : "Content type",
            "TCR" : "Copyright message",
            "TDA" : "Date",
            "TDY" : "Playlist delay",
            "TEN" : "Encoded by",
            "TFT" : "File type",
            "TIM" : "Time",
            "TKE" : "Initial key",
            "TLA" : "Language(s)",
            "TLE" : "Length",
            "TMT" : "Media type",
            "TOA" : "Original artist(s)/performer(s)",
            "TOF" : "Original filename",
            "TOL" : "Original Lyricist(s)/text writer(s)",
            "TOR" : "Original release year",
            "TOT" : "Original album/Movie/Show title",
            "TP1" : "Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",
            "TP2" : "Band/Orchestra/Accompaniment",
            "TP3" : "Conductor/Performer refinement",
            "TP4" : "Interpreted, remixed, or otherwise modified by",
            "TPA" : "Part of a set",
            "TPB" : "Publisher",
            "TRC" : "ISRC (International Standard Recording Code)",
            "TRD" : "Recording dates",
            "TRK" : "Track number/Position in set",
            "TSI" : "Size",
            "TSS" : "Software/hardware and settings used for encoding",
            "TT1" : "Content group description",
            "TT2" : "Title/Songname/Content description",
            "TT3" : "Subtitle/Description refinement",
            "TXT" : "Lyricist/text writer",
            "TXX" : "User defined text information frame",
            "TYE" : "Year",
            "UFI" : "Unique file identifier",
            "ULT" : "Unsychronized lyric/text transcription",
            "WAF" : "Official audio file webpage",
            "WAR" : "Official artist/performer webpage",
            "WAS" : "Official audio source webpage",
            "WCM" : "Commercial information",
            "WCP" : "Copyright/Legal information",
            "WPB" : "Publishers official webpage",
            "WXX" : "User defined URL link frame",
            // v2.3
            "AENC" : "Audio encryption",
            "APIC" : "Attached picture",
            "COMM" : "Comments",
            "COMR" : "Commercial frame",
            "ENCR" : "Encryption method registration",
            "EQUA" : "Equalization",
            "ETCO" : "Event timing codes",
            "GEOB" : "General encapsulated object",
            "GRID" : "Group identification registration",
            "IPLS" : "Involved people list",
            "LINK" : "Linked information",
            "MCDI" : "Music CD identifier",
            "MLLT" : "MPEG location lookup table",
            "OWNE" : "Ownership frame",
            "PRIV" : "Private frame",
            "PCNT" : "Play counter",
            "POPM" : "Popularimeter",
            "POSS" : "Position synchronisation frame",
            "RBUF" : "Recommended buffer size",
            "RVAD" : "Relative volume adjustment",
            "RVRB" : "Reverb",
            "SYLT" : "Synchronized lyric/text",
            "SYTC" : "Synchronized tempo codes",
            "TALB" : "Album/Movie/Show title",
            "TBPM" : "BPM (beats per minute)",
            "TCOM" : "Composer",
            "TCON" : "Content type",
            "TCOP" : "Copyright message",
            "TDAT" : "Date",
            "TDLY" : "Playlist delay",
            "TENC" : "Encoded by",
            "TEXT" : "Lyricist/Text writer",
            "TFLT" : "File type",
            "TIME" : "Time",
            "TIT1" : "Content group description",
            "TIT2" : "Title/songname/content description",
            "TIT3" : "Subtitle/Description refinement",
            "TKEY" : "Initial key",
            "TLAN" : "Language(s)",
            "TLEN" : "Length",
            "TMED" : "Media type",
            "TOAL" : "Original album/movie/show title",
            "TOFN" : "Original filename",
            "TOLY" : "Original lyricist(s)/text writer(s)",
            "TOPE" : "Original artist(s)/performer(s)",
            "TORY" : "Original release year",
            "TOWN" : "File owner/licensee",
            "TPE1" : "Lead performer(s)/Soloist(s)",
            "TPE2" : "Band/orchestra/accompaniment",
            "TPE3" : "Conductor/performer refinement",
            "TPE4" : "Interpreted, remixed, or otherwise modified by",
            "TPOS" : "Part of a set",
            "TPUB" : "Publisher",
            "TRCK" : "Track number/Position in set",
            "TRDA" : "Recording dates",
            "TRSN" : "Internet radio station name",
            "TRSO" : "Internet radio station owner",
            "TSIZ" : "Size",
            "TSRC" : "ISRC (international standard recording code)",
            "TSSE" : "Software/Hardware and settings used for encoding",
            "TYER" : "Year",
            "TXXX" : "User defined text information frame",
            "UFID" : "Unique file identifier",
            "USER" : "Terms of use",
            "USLT" : "Unsychronized lyric/text transcription",
            "WCOM" : "Commercial information",
            "WCOP" : "Copyright/Legal information",
            "WOAF" : "Official audio file webpage",
            "WOAR" : "Official artist/performer webpage",
            "WOAS" : "Official audio source webpage",
            "WORS" : "Official internet radio station homepage",
            "WPAY" : "Payment",
            "WPUB" : "Publishers official webpage",
            "WXXX" : "User defined URL link frame"
        };
    
    function ID3v2(binaryStr) {
        this.data = binaryStr;
    }
    
    ID3v2.prototype = {
        
        constructor : ID3v2,
        
        readTags : function () {
            var offset = 0,
                major = data.getByteAt(offset+3),
                revision, unsynch, xheader, xindicator,
                size, xheadersize, id3, frames, name, data,
                frame;
            
            if (major > 4) { return { version: '>2.4' }; }
            
            revision = data.getByteAt(offset+4);
            unsynch = data.isBitSetAt(offset+5, 7);
            xheader = data.isBitSetAt(offset+5, 6);
            xindicator = data.isBitSetAt(offset+5, 5);
            size = readSynchsafeInteger32At(offset+6, data);
            
            offset += 10;
        
            if( xheader ) {
                xheadersize = data.getLongAt(offset, true);
                // The 'Extended header size', currently 6 or 10 bytes, excludes itself.
                offset += xheadersize + 4;
            }

            id3 = {
        	    "version" : '2.' + major + '.' + revision,
        	    "major" : major,
        	    "revision" : revision,
        	    "flags" : {
        	        "unsynchronisation" : unsynch,
        	        "extended_header" : xheader,
        	        "experimental_indicator" : xindicator
        	    },
        	    "size" : size
        	};
            
            frames = unsynch ? {} : readFrames(offset, size-10, data, id3, tags);
        	// create shortcuts for most common data
        	for (name in _shortcuts) { 
                if (_shortcuts.hasOwnProperty(name)) {
        	        data = getFrameData( frames, _shortcuts[name] );
        	        if (data) { id3[name] = data; }
        	    }
            }
    	
        	for (frame in frames) {
        	    if (frames.hasOwnProperty(frame)) {
        	        id3[frame] = frames[frame];
        	    }
        	}
    	
        	return id3;
            
        }
    };
    
    return ID3v2;
});
