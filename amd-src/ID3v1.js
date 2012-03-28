define(function () {
    'use strict';
    
    var genres = [
    	"Blues","Classic Rock","Country","Dance","Disco","Funk","Grunge",
    	"Hip-Hop","Jazz","Metal","New Age","Oldies","Other","Pop","R&B",
    	"Rap","Reggae","Rock","Techno","Industrial","Alternative","Ska",
    	"Death Metal","Pranks","Soundtrack","Euro-Techno","Ambient",
    	"Trip-Hop","Vocal","Jazz+Funk","Fusion","Trance","Classical",
    	"Instrumental","Acid","House","Game","Sound Clip","Gospel",
    	"Noise","AlternRock","Bass","Soul","Punk","Space","Meditative",
    	"Instrumental Pop","Instrumental Rock","Ethnic","Gothic",
    	"Darkwave","Techno-Industrial","Electronic","Pop-Folk",
    	"Eurodance","Dream","Southern Rock","Comedy","Cult","Gangsta",
    	"Top 40","Christian Rap","Pop/Funk","Jungle","Native American",
    	"Cabaret","New Wave","Psychadelic","Rave","Showtunes","Trailer",
    	"Lo-Fi","Tribal","Acid Punk","Acid Jazz","Polka","Retro",
    	"Musical","Rock & Roll","Hard Rock","Folk","Folk-Rock",
    	"National Folk","Swing","Fast Fusion","Bebob","Latin","Revival",
    	"Celtic","Bluegrass","Avantgarde","Gothic Rock","Progressive Rock",
    	"Psychedelic Rock","Symphonic Rock","Slow Rock","Big Band",
    	"Chorus","Easy Listening","Acoustic","Humour","Speech","Chanson",
    	"Opera","Chamber Music","Sonata","Symphony","Booty Bass","Primus",
    	"Porn Groove","Satire","Slow Jam","Club","Tango","Samba",
    	"Folklore","Ballad","Power Ballad","Rhythmic Soul","Freestyle",
    	"Duet","Punk Rock","Drum Solo","Acapella","Euro-House","Dance Hall"
    ];
    
    
    function ID3v1(binaryStr) {
        
    }
    
    ID3v1.prototype = {
        
        constructor : ID3v1,
        
        readTags : function () {
        	var offset = data.getLength() - 128,
                header = data.getStringAt(offset, 3),
                title, artist, album, year, trackFlag,
                comment, track, genreIdx, genre;
            
        	if (header == "TAG") {
        		title = data.getStringAt(offset + 3, 30).replace(/\0/g, "");
        		artist = data.getStringAt(offset + 33, 30).replace(/\0/g, "");
        		album = data.getStringAt(offset + 63, 30).replace(/\0/g, "");
        		year = data.getStringAt(offset + 93, 4).replace(/\0/g, "");
                trackFlag = data.getByteAt(offset + 97 + 28);
        		
                if (trackFlag == 0) {
        			comment = data.getStringAt(offset + 97, 28).replace(/\0/g, "");
        		    track = data.getByteAt(offset + 97 + 29);
        		} else {
        		    comment = "";
        			track = 0;
        		}

        		genreIdx = data.getByteAt(offset + 97 + 30);
        		if (genreIdx < 255) { genre = genres[genreIdx]; } 
                else { genre = ""; }

        		return {
        		    "version" : '1.1',
        			"title" : title,
        			"artist" : artist,
        			"album" : album,
        			"year" : year,
        			"comment" : comment,
        			"track" : track,
        			"genre" : genre
        		}
        	}
            
            return;
            
        },
    };
    
    return ID3v1;
});