const DISP_ELEM = document.getElementById('display')
const INP_ELEM = document.getElementById('input')
const TIME_ELEM = document.getElementById('clock')
const WPM_ELEM = document.getElementById('wpm')
const WPM_NUM_ELEM = document.getElementById('wpmNum')
const CASE_ELEM = document.getElementById('slider')
const CORR_ELEM = document.getElementById('correctChar')
const INCORR_ELEM = document.getElementById('incorrectChar')
const GWPM_ELEM = document.getElementById('gwpm')
const ACC_ELEM = document.getElementById('acc')
const LIVE_WPM_ELEM = document.getElementById('liveWpm')


var words = ['between', 'keep', 'two', 'earth', 'well', 'real', 'hard', 'without', 'new', 'show', 'one', 'begin', 'talk', 'write', 'learn', 'still', 'another', 'follow', 'young', 'end', 'change', 'seem', 'thing', 'head', 'three', 
'went', 'began', 'since', 'it', 'very', 'did', 'early', 'might', 'your', 'land', 'into', 'girl', 'stop', 'answer', 'different', 'look', 'he', 'has', 'order', 'do', 'more', 'carry', 'govern', 'world', 'left', 'stand', 'so', 'what', 
'sentence', 'these', 'state', 'fact', 'food', 'be', 'against', 'think', 'add', 'see', 'some', 'set', 'by', 'make', 'us', 'list', 'they', 'have', 'made', 'being', 'through', 'once', 'hold', 'find', 'read', 
'life', 'turn', 'were', 'miss', 'at', 'country', 'last', "don't", 'give', 'right', 'been', 'hear', 'even', 'increase', 'way', 'sound', 'important', 'play', 'man', 'its', 'an', 'came', 'interest', 'thought', 
'many', 'saw', 'eye', 'something', 'take', 'said', 'such', 'general', 'group', 'any', 'old', 'father', 'for', 'child', 'river', 'try', 'know', 'hand', 'later', 'just', 'my', 'most', 'about', 'together', 'first', 
'word', 'kind', 'enough', 'become', 'again', 'from', 'also', 'if', 'present', 'study', 'song', 'sometimes', 'work', 'walk', 'her', 'go', 'water', 'children', 'help', 'you', 'small', 'tell', 'animal', 'system', 'sea',
 'feet', 'name', 'every', 'too', 'however', 'here', 'idea', 'should', 'program', 'out', 'close', 'really', 'almost', 'little', 'form', 'side', 'while', 'watch', 'good', 'boy', 'only', 'those', 'car', 'get', 'page', 'large', 
 'high', 'each', 'in', 'must', 'then', 'plant', 'to', 'America', 'was', 'quickly', 'develop', 'book', 'great', 'same', 'far', 'over', 'lead', 'day', 'near', 'family', 'year', 'grow', 'mean', 'number', 'both', 'them', 'paper', 'up', 
'nation', 'own', 'late', 'open', 'example', 'ask', 'mile', 'a', 'few', 'face', 'down', 'she', 'line', 'away', 'during', 'off', 'use', 'who', 'got', 'our', 'often', 'could', 'story', 'white', 'when', 'place', 'quite', 'house', 'until', 'as', 
'school', 'time', 'start', 'want', 'because', 'of', 'all', 'like', 'long', 'soon', 'four', 'live', 'tree', 'quick', 'air', "it's", 'person', 'me', 'light', 'is', 'no', 'leave', 'took', 'but', 'night', 'call', 'may', 'picture', 'with', 'under', 'feel', 'move', 'part', 'after', 'why', 'than', 'problem', 'below', 'oil', 'big', 'above', 'home', 'and', 'would', 'around', 'where', 'letter', 'found', 'consider', 'him', 'will', 'before', 'come', 'eat', 'the', 'not', 'mountain', 'other', 'never', 'along', 'put', 'their', 'city', 'his', 'that', 'need', 'public', 'second', 'spell', 'much', 'question', 'men', 'cut', 'people', 'run', 'there', 'next', 'point', 'can', 'had', 'let', 'or', 'back', 'possible', 'does', 'how', 'which', 'mother', 'we', 'say', 'now', 'this', 'always', 'on', 'plan', 'course', 'are'];

var quotes = [['It', 'was', 'just', 'a', 'burger.', 'Why', "couldn't", 'she', 'understand', 'that?', 'She', 'knew', "he'd", 'completely', 'changed', 'his', 'life', 'around', 'her', 'eating', 'habits,', 'so', 'why', "couldn't", 'she', 'give', 'him', 'a', 'break', 'this', 'one', 'time?', 'She', "wasn't", 'even', 'supposed', 'to', 'have', 'found', 'out.', 'Yes,', 'he', 'had', 'promised', 'her', 'and', 'yes,', 'he', 'had', 'broken', 'that', 'promise,', 'but', 'still', 'in', 'his', 'mind,', 'all', 'it', 'had', 'been', 'was', 'just', 'a', 'burger.'], ['Barbara', 'had', 'been', 'waiting', 'at', 'the', 'table', 'for', 'twenty', 'minutes.', 'it', 'had', 'been', 'twenty', 'long', 'and', 'excruciating', 'minutes.', 'David', 'had', 'promised', 'that', 'he', 'would', 'be', 'on', 'time', 'today.', 'He', 'never', 'was,', 'but', 'he', 'had', 'promised', 'this', 'one', 'time.', 'She', 
'had', 'made', 'him', 'repeat', 'the', 'promise', 'multiple', 'times', 'over', 'the', 'last', 'week', 'until', "she'd", 'believed', 'his', 'promise.', 'Now', 'she', 'was', 'paying', 'the', 'price.'], ["I'm", 'heading', 'back', 'to', 'Colorado', 'tomorrow', 'after', 'being', 'down', 'in', 'Santa', 'Barbara', 'over', 'the', 'weekend', 'for', 'the', 'festival', 'there.', 'I', 'will', 'be', 'making', 'October', 'plans', 'once', 'there', 'and', 'will', 'try', 'to', 'arrange', 'so', "I'm", 'back', 'here', 'for', 'the', 'birthday', 'if', 'possible.', "I'll", 'let', 'you', 'know', 'as', 'soon', 'as', 'I', 'know', 'the', "doctor's", 'appointment', 'schedule', 'and', 'my', 'flight', 'plans.'], ['Indescribable', 'oppression,', 'which', 'seemed', 'to', 'generate', 'in', 'some', 'unfamiliar', 'part', 'of', 'her', 'consciousness,', 'filled', 'her', 'whole', 'being', 'with', 'a', 'vague', 'anguish.', 'It', 'was', 'like', 'a', 'shadow,', 'like', 'a', 'mist', 'passing', 'across', 'her', "soul's", 'summer', 'day.', 'It', 'was', 'strange', 'and', 'unfamiliar;', 'it', 'was', 'a', 'mood.', 'She', 'did', 'not', 'sit', 'there', 'inwardly', 'upbraiding', 'her', 'husband,', 'lamenting', 'at', 'Fate,', 'which', 'had', 'directed', 'her', 'footsteps', 'to', 'the', 'path', 'which', 'they', 'had', 'taken.', 'She', 'was', 'just', 'having', 'a', 'good', 'cry', 'all', 'to', 'herself.', 'The', 'mosquitoes', 'made', 'merry', 'over', 'her,', 'biting', 'her', 'firm,', 'round', 'arms', 'and', 'nipping', 'at', 'her', 'bare', 'insteps.'], ['MaryLou', 'wore', 'the', 'tiara', 'with', 'pride.', 'There', 'was', 'something', 'that', 'made', 'doing', 'anything', 'she', "didn't", 'really', 'want', 'to', 'do', 'a', 'bit', 'easier', 'when', 'she', 'wore', 'it.', 'She', 'really', "didn't", 'care', 'what', 'those', 'staring', 'through', 'the', 'window', 'were', 'thinking', 'as', 'she', 'vacuumed', 'her', 'apartment.'], ['The', 'headphones', 'were', 'on.', 'They', 'had', 'been', 'utilized', 'on', 'purpose.', 'She', 'could', 'hear', 'her', 'mom', 'yelling', 'in', 'the', 'background,', 'but', "couldn't", 'make', 'out', 'exactly', 'what', 'the', 'yelling', 'was', 'about.', 'That', 'was', 'exactly', 'why', 'she', 'had', 'put', 'them', 'on.', 'She', 'knew', 'her', 'mom', 'would', 'enter', 'her', 'room', 'at', 'any', 'minute,', 'and', 'she', 'could', 'pretend', 'that', 'she', "hadn't", 'heard', 'any', 
'of', 'the', 'previous', 'yelling.'], ['What', 'have', 'you', 'noticed', 'today?', 'I', 'noticed', 'that', 'if', 'you', 'outline', 'the', 'eyes,', 'nose,', 'and', 'mouth', 'on', 'your', 'face', 'with', 'your', 'finger,', 'you', 'make', 'an', '"I"', 'which', 'makes', 'perfect', 'sense,', 'but', 'is', 'something', 'I', 'never', 'noticed', 'before.', 'What', 'have', 'you', 'noticed', 'today?'], ['She', 'was', 'in', 'a', 'hurry.', 'Not', 'the', 'standard', 'hurry', 'when', "you're", 'in', 'a', 'rush', 'to', 'get', 'someplace,', 'but', 'a', 'frantic', 'hurry.', 'The', 'type', 'of', 'hurry', 'where', 'a', 'few', 'seconds', 'could', 'mean', 'life', 'or', 'death.', 'She', 'raced', 'down', 'the', 'road', 'ignoring', 'speed', 'limits', 'and', 'weaving', 'between', 'cars.', 'She', 'was', 'only', 'a', 'few', 'minutes', 'away', 'when', 'traffic', 'came', 'to', 'a', 'dead', 'standstill', 'on', 'the', 'road', 'ahead.'], ["I've", 'rented', 'a', 'car', 'in', 'Las', 'Vegas', 'and', 'have', 'reserved', 'a', 'hotel', 'in', 'Twentynine', 'Palms', 'which', 'is', 'just', 'north', 'of', 'Joshua', 'Tree.', "We'll", 'drive', 'from', 'Las', 'Vegas', 'through', 'Mojave', 'National', 'Preserve', 'and', 'possibly', 'do', 'a', 'short', 'hike', 'on', 'our', 'way', 'down.', 'Then', 'spend', 'all', 'day', 'on', 'Monday', 'at', 'Joshua', 'Tree.', 'We', 'can', 'decide', 'the', 'next', 'morning', 'if', 'we', 'want', 'to', 'do', 'more', 'in', 'Joshua', 'Tree', 'or', 'Mojave', 'before', 'we', 'head', 'back.'], ['He', 'was', 'an', 'expert', 'but', 'not', 'in', 'a', 'discipline', 'that', 'anyone', 'could', 'fully', 'appreciate.', 'He', 'knew', 'how', 'to', 'hold', 'the', 'cone', 'just', 'right', 'so', 'that', 'the', 'soft', 'server', 'ice-cream', 
'fell', 'into', 'it', 'at', 'the', 'precise', 'angle', 'to', 'form', 'a', 'perfect', 'cone', 'each', 'and', 'every', 'time.', 'It', 'had', 'taken', 'years', 'to', 'perfect', 'and', 'he', 'could', 'now', 'do', 'it', 'without', 'even', 'putting', 'any', 'thought', 'behind', 'it.', 'Nobody', 'seemed', 'to', 'fully', 'understand', 'the', 'beauty', 'of', 'this', 'accomplishment', 'except', 'for', 'the', 'new', 'worker', 'who', 'watched', 'in', 'amazement.'], ['MaryLou', 'wore', 'the', 'tiara', 'with', 'pride.', 'There', 'was', 'something', 'that', 'made', 'doing', 'anything', 'she', "didn't", 'really', 'want', 'to', 'do', 'a', 'bit', 'easier', 'when', 'she', 'wore', 'it.', 'She', 'really', "didn't", 'care', 'what', 'those', 'staring', 'through', 'the', 'window', 'were', 'thinking', 'as', 'she', 'vacuumed', 'her', 'apartment.'], ['It', "wasn't", 'quite', 'yet', 
'time', 'to', 'panic.', 'There', 'was', 'still', 'time', 'to', 'salvage', 'the', 'situation.', 'At', 'least', 'that', 'is', 'what', 'she', 'was', 'telling', 'himself.', 'The', 'reality', 'was', 'that', 'it', 'was', 'time', 'to', 'panic', 'and', 'there', "wasn't", 'time', 'to', 'salvage', 'the', 'situation,', 'but', 'he', 'continued', 'to', 'delude', 'himself', 'into', 'believing', 'there', 'was.'], ['Dave', 'found', 'joy', 'in', 'the', 'daily', 'routine', 'of', 'life.', 'He', 'awoke', 'at', 'the', 'same', 'time,', 'ate', 'the', 'same', 'breakfast', 'and', 'drove', 'the', 'same', 'commute.', 'He', 'worked', 'at', 'a', 'job', 'that', 'never', 'seemed', 'to', 'change', 'and', 'he', 'got', 'home', 'at', '6', 'pm', 'sharp', 'every', 'night.', 'It', 'was', 'who', 'he', 'had', 'been', 'for', 'the', 'last', 'ten', 'years', 'and', 'he', 'had', 'no', 'idea', 'that', 'was', 'all', 'about', 'to', 'change.'], ['It', 'was', 'a', 'concerning', 'development', 'that', 'he', "couldn't", 'get', 'out', 'of', 'his', 'mind.', "He'd", 'had', 'many', 'friends', 'throughout', 'his', 'early', 'years', 'and', 'had', 'fond', 'memories', 'of', 'playing', 'with', 'them,', 'but', 'he', "couldn't", 'understand', 'how', 'it', 'had', 'all', 'stopped.', 'There', 'was', 'some', 'point', 'as', 'he', 'grew', 'up', 'that', 'he', 'played', 'with', 'each', 'of', 'his', 'friends', 'for', 'the', 'very', 'last', 'time,', 'and', 'he', 'had', 'no', 'idea', 'that', 'it', 'would', 'be', 'the', 'last.'], ['It', 'was', 'just', 'a', 'burger.', 
'Why', "couldn't", 'she', 'understand', 'that?', 'She', 'knew', "he'd", 'completely', 'changed', 'his', 'life', 'around', 'her', 'eating', 'habits,', 'so', 'why', "couldn't", 'she', 'give', 'him', 'a', 'break', 'this', 'one', 'time?', 'She', "wasn't", 'even', 'supposed', 'to', 'have', 'found', 'out.', 'Yes,', 'he', 'had', 'promised', 'her', 'and', 'yes,', 'he', 'had', 'broken', 'that', 'promise,', 'but', 'still', 'in', 'his', 'mind,', 'all', 'it', 'had', 'been', 'was', 'just', 'a', 'burger.'], ['Pink', 'ponies', 'and', 'purple', 'giraffes', 'roamed', 'the', 'field.', 'Cotton', 'candy', 'grew', 'from', 'the', 'ground', 'as', 'a', 'chocolate', 'river', 'meandered', 'off', 'to', 'the', 'side.', 'What', 'looked', 'like', 'stones', 'in', 'the', 'pasture', 'were', 'actually', 'rock', 'candy.', 'Everything', 'in', 'her', 'dream', 'seemed', 'to', 'be', 'perfect', 
'except', 'for', 'the', 'fact', 'that', 'she', 'had', 'no', 'mouth.'], ['"It', 'was', 'so', 'great', 'to', 'hear', 'from', 'you', 'today', 'and', 'it', 'was', 'such', 'weird', 'timing,"', 'he', 'said.', '"This', 'is', 'going', 'to', 'sound', 'funny', 'and', 'a', 'little', 'strange,', 'but', 'you', 'were', 'in', 'a', 'dream', 'I', 'had', 'just', 'a', 'couple', 'of', 'days', 'ago.', "I'd", 'love', 'to', 'get', 'together', 'and', 'tell', 'you', 'about', 'it', 'if', "you're", 'up', 'for', 'a', 'cup', 'of', 'coffee,"', 'he', 'continued,', 'laying', 'the', 'trapped', "he's", 'been', 'planning', 'for', 'years.'], ['Spending', 'time', 'at', 'national', 'parks', 'can', 'be', 'an', 'exciting', 'adventure,', 'but', 'this', "wasn't", 'the', 'type', 'of', 'excitement', 'she', 'was', 'hoping', 'to', 'experience.', 'As', 'she', 'contemplated', 'the', 'situation', 'she', 
'found', 'herself', 'in,', 'she', 'knew', "she'd", 'gotten', 'herself', 'in', 'a', 'little', 'more', 'than', 'she', 'bargained', 'for.', 'It', "wasn't", 'often', 'that', 'she', 'found', 'herself', 'in', 'a', 'tree', 'staring', 'down', 'at', 'a', 'pack', 'of', 'wolves', 'that', 'were', 'looking', 'to', 'make', 'her', 'their', 'next', 'meal.'], ['Josh', 'had', 'spent', 'year', 'and', 'year', 'accumulating', 'the', 'information.', 'He', 'knew', 'it', 'inside', 'out', 'and', 'if', 'there', 'was', 'ever', 'anyone', 'looking', 'for', 'an', 'expert', 'in', 'the', 'field,', 'Josh', 'would', 'be', 'the', 'one', 'to', 'call.', 'The', 'problem', 'was', 'that', 'there', 'was', 'nobody', 'interested', 'in', 'the', 'information', 'besides', 'him', 'and', 'he', 'knew', 'it.', 'Years', 'of', 'information', 'painstakingly', 'memorized', 'and', 'sorted', 'with', 'not', 'a', 'sole', 'giving', 'even', 'an', 'ounce', 'of', 'interest', 'in', 'the', 'topic.'], ['He', 'heard', 'the', 'loud', 'impact', 'before', 'he', 'ever', 'saw', 'the', 'result.', 'It', 'had', 'been', 'so', 'loud', 'that', 
'it', 'had', 'actually', 'made', 'him', 'jump', 'back', 'in', 'his', 'seat.', 'As', 'soon', 'as', 'he', 'recovered', 'from', 'the', 'surprise,', 'he', 'saw', 'the', 'crack', 'in', 'the', 'windshield.', 'It', 'seemed', 'to', 'be', 'an', 'analogy', 'of', 'the', 'current', 'condition', 'of', 'his', 'life.'], ['Balloons', 'are', 'pretty', 'and', 'come', 'in', 'different', 'colors,', 'different', 'shapes,', 'different', 'sizes,', 'and', 'they', 'can', 'even', 'adjust', 'sizes', 'as', 'needed.', 'But', "don't", 'make', 'them', 'too', 'big', 'or', 'they', 'might', 'just', 'pop,', 'and', 'then', 'bye-bye', 'balloon.', "It'll", 'be', 'gone', 'and', 'lost', 'for', 'the', 'rest', 'of', 'mankind.', 'They', 'can', 'serve', 'a', 'variety', 'of', 'purposes,', 'from', 'decorating', 'to', 'water', 'balloon', 'wars.', 'You', 'just', 'have', 'to', 'use', 'your', 'head', 'to', 'think', 'a', 'little', 'bit', 'about', 'what', 'to', 'do', 'with', 'them.'], ['"What', 'is', 'the', 'best', 'way', 'to', 'get', 'what', 'you', 'want?"', 'she', 'asked.', 'He', 'looked', 'down', 'at', 'the', 'ground', 'knowing', 'that', 'she', "wouldn't", 'like', 'his', 'answer.', 'He', 'hesitated,', 'knowing', 'that', 'the', 'truth', 'would', 'only', 'hurt.', 'How', 'was', 'he', 'going', 'to', 'tell', 'her', 'that', 'the', 'best', 'way', 'for', 'him', 'to', 'get', 'what', 'he', 'wanted', 'was', 'to', 'leave', 'her?'], ['Indescribable', 'oppression,', 'which', 'seemed', 'to', 'generate', 'in', 'some', 'unfamiliar', 'part', 'of', 'her', 'consciousness,', 'filled', 'her', 'whole', 'being', 'with', 'a', 'vague', 'anguish.', 'It', 'was', 'like', 'a', 'shadow,', 'like', 'a', 'mist', 'passing', 'across', 'her', "soul's", 'summer', 'day.', 'It', 'was', 'strange', 'and', 'unfamiliar;', 'it', 'was', 'a', 'mood.', 'She', 'did', 'not', 'sit', 'there', 'inwardly', 'upbraiding', 'her', 'husband,', 'lamenting', 'at', 'Fate,', 'which', 'had', 'directed', 'her', 'footsteps', 'to', 'the', 'path', 'which', 'they', 'had', 'taken.', 'She', 'was', 'just', 'having', 'a', 'good', 'cry', 'all', 'to', 'herself.', 'The', 'mosquitoes', 'made', 'merry', 'over', 'her,', 'biting', 'her', 'firm,', 'round', 'arms', 'and', 'nipping', 'at', 'her', 'bare', 'insteps.'], ['The', 'red', 'glint', 'of', 'paint', 'sparkled', 'under', 'the', 'sun.', 'He', 'had', 'dreamed', 'of', 'owning', 'this', 'car', 'since', 'he', 'was', 'ten,', 
'and', 'that', 'dream', 'had', 'become', 'a', 'reality', 'less', 'than', 'a', 'year', 'ago.', 'It', 'was', 'his', 'baby', 'and', 'he', 'spent', 'hours', 'caring', 'for', 'it,', 'pampering', 'it,', 'and', 'fondling', 'over', 'it.', 'She', 'knew', 'this', 'all', 'too', 'well,', 'and', "that's", 'exactly', 'why', 'she', 'had', 'taken', 'a', 'sludge', 'hammer', 'to', 'it.'], ['I', 'recollect', 'that', 'my', 'first', 'exploit', 'in', 'squirrel-shooting', 'was', 'in', 'a', 'grove', 'of', 'tall', 'walnut-trees', 'that', 'shades', 'one', 'side', 'of', 'the', 'valley.', 'I', 'had', 'wandered', 'into', 'it', 'at', 'noontime,', 'when', 'all', 'nature', 'is', 'peculiarly', 'quiet,', 'and', 'was', 'startled', 'by', 'the', 'roar', 'of', 'my', 'own', 'gun,', 'as', 'it', 'broke', 'the', 'Sabbath', 'stillness', 'around', 'and', 'was', 'prolonged', 'and', 'reverberated', 'by', 'the', 'angry', 'echoes.'], ['The', 'chair', 'sat', 'in', 'the', 'corner', 'where', 'it', 'had', 'been', 'for', 'over', '25', 'years.', 'The', 'only', 'difference', 'was', 'there', 'was', 'someone', 'actually', 'sitting', 'in', 'it.', 'How', 'long', 'had', 'it', 'been', 'since', 'someone', 'had', 'done', 'that?', 'Ten', 'years', 'or', 'more', 'he', 'imagined.', 'Yet', 'there', 'was', 'no', 'denying', 'the', 'presence', 'in', 'the', 'chair', 'now.'], ['Do', 'you', 'really', 'listen', 'when', 'you', 'are', 'talking', 'with', 'someone?', 'I', 'have', 'a', 'friend', 'who', 'listens', 'in', 'an', 'unforgiving', 'way.', 'She', 'actually', 'takes', 'every', 'word', 'you', 'say', 'as', 'being', 'something', 'important', 'and', 'when', 'you', 'have', 'a', 'friend', 'that', 'listens', 'like', 'that,', 'words', 'take', 'on', 'a', 'whole', 'new', 'meaning.'], ['I', 'guess', 'we', 'could', 'discuss', 'the', 'implications', 'of', 'the', 'phrase', '"meant', 'to', 'be."', 'That', 'is', 'if', 'we', 'wanted', 'to', 'drown', 'ourselves', 'in', 'a', 'sea', 'of', 'backwardly', 'referential', 'semantics', 'and', 'other', 'mumbo-jumbo.', 'Maybe', 'such', 'a', 'discussion', 'would', 'result', 'in', 'the', 'determination', 'that', '"meant', 'to', 'be"', 'is', 'exactly', 'as', 'meaningless', 'a', 'phrase', 'as', 'it', 'seems', 'to', 'be,', 'and', 'that', 'none', 'of', 'us', 'is', 'actually', 'meant', 'to', 'be', 'doing', 'anything', 'at', 'all.', 'But', "that's", 'my', 'existential', 'underpants', 'underpinnings', 'showing.', "It's", 'the', 'way', 'the', 'cookie', 'crumbles.', 'And', 'now', 'I', 'want', 'a', 'cookie.'], ['All', 'he', 'could', 'think', 'about', 'was', 'how', 'it', 'would', 'all', 'end.', 'There', 'was', 'still', 
'a', 'bit', 'of', 'uncertainty', 'in', 'the', 'equation,', 'but', 'the', 'basics', 'were', 'there', 'for', 'anyone', 'to', 'see.', 'No', 'matter', 'how', 'much', 'he', 'tried', 'to', 'see', 'the', 'positive,', 'it', "wasn't", 'anywhere', 'to', 'be', 'seen.', 'The', 'end', 'was', 'coming', 'and', 'it', "wasn't", 'going', 'to', 'be', 'pretty.'], ['He', "couldn't", 'move.', 'His', 'head', 'throbbed', 'and', 'spun.', 'He', "couldn't", 'decide', 'if', 'it', 'was', 'the', 'flu', 'or', 'the', 'drinking', 'last', 'night.', 'It', 'was', 'probably', 'a', 'combination', 'of', 'both.'], ['The', 'wave', 'crashed', 'and', 'hit', 'the', 'sandcastle', 'head-on.', 'The', 'sandcastle', 'began', 'to', 'melt', 'under', 'the', 'waves', 'force', 'and', 'as', 'the', 'wave', 'receded,', 'half', 'the', 'sandcastle', 'was', 'gone.', 'The', 'next', 'wave', 'hit,', 'not', 'quite', 'as', 'strong,', 'but', 'still', 'managed', 'to', 'cover', 'the', 'remains', 'of', 'the', 'sandcastle', 'and', 'take', 'more', 'of', 'it', 'away.', 'The', 'third', 'wave,', 'a', 'big', 'one,', 'crashed', 'over', 'the', 
'sandcastle', 'completely', 'covering', 'and', 'engulfing', 'it.', 'When', 'it', 'receded,', 'there', 'was', 'no', 'trace', 'the', 'sandcastle', 'ever', 'existed', 'and', 'hours', 'of', 'hard', 'work', 'disappeared', 
'forever.'], ['He', 'had', 'three', 'simple', 'rules', 'by', 'which', 'he', 'lived.', 'The', 'first', 'was', 'to', 'never', 'eat', 'blue', 'food.', 'There', 'was', 'nothing', 'in', 'nature', 'that', 'was', 'edible', 'that', 'was', 'blue.', 'People', 'often', 'asked', 'about', 'blueberries,', 'but', 'everyone', 'knows', 'those', 'are', 'actually', 'purple.', 'He', 'understood', 'it', 'was', 'one', 'of', 'the', 'stranger', 'rules', 
'to', 'live', 'by,', 'but', 'it', 'had', 'served', 'him', 'well', 'thus', 'far', 'in', 'the', '50+', 'years', 'of', 'his', 'life.'], ['They', 'argue.', 'While', 'the', 'argument', 'seems', 'to', 'be', 'different', 'the', 'truth', 'is', "it's", 'always', 'the', 'same.', 'Yes,', 'the', 'topic', 'may', 'be', 'different', 'or', 'the', 'circumstances,', 'but', 'when', 'all', 'said', 'and', 'done,', 'it', 'all', 'came', 'back', 'to', 'the', 'same', 'thing.', 'They', 'both', 'knew', 'it,', 'but', 'neither', 'has', 'the', 'courage', 'or', 'strength', 'to', 'address', 'the', 'underlying', 'issue.', 'So', 'they', 'continue', 'to', 'argue.'], ['"Begin', 
'today!"', "That's", 'all', 'the', 'note', 'said.', 'There', 'was', 'no', 'indication', 'from', 'where', 'it', 'came', 'or', 'who', 'may', 'have', 'written', 'it.', 'Had', 'it', 'been', 'meant', 'for', 'someone', 'else?', 'Meghan', 'looked', 'around', 'the', 'room,', 'but', 'nobody', 'made', 'eye', 'contact', 'back.', 'For', 'a', 'brief', 'moment,', 'she', 'thought', 'it', 'might', 'be', 'a', 'message', 'for', 'her', 'to', 'follow', 'her', 'dreams,', 'but', 'ultimately', 'decided', 'it', 'was', 'easier', 'to', 'ignore', 'it', 'as', 'she', 'crumpled', 'it', 'up', 'and', 'threw', 'it', 'away.'], ['As', 'she', 'sat', 'watching', 'the', 'world', 'go', 'by,', 'something', 'caught', 'her', 'eye.', 'It', "wasn't", 'so', 'much', 'its', 'color', 'or', 'shape,', 'but', 'the', 'way', 'it', 'was', 'moving.', 'She', 'squinted', 'to', 'see', 'if', 'she', 'could', 'better', 'understand', 'what', 'it', 'was', 'and', 'where', 'it', 'was', 'going,', 'but', 'it', "didn't", 'help.', 'As', 'she', 'continued', 'to', 'stare', 'into', 'the', 'distance,', 'she', "didn't", 'understand', 'why', 
'this', 'uneasiness', 'was', 'building', 'inside', 'her', 'body.', 'She', 'felt', 'like', 'she', 'should', 'get', 'up', 'and', 'run.', 'If', 'only', 'she', 'could', 'make', 'out', 'what', 'it', 'was.', 'At', 'that', 'moment,', 'she', 'comprehended', 'what', 'it', 'was', 'and', 'where', 'it', 'was', 'heading,', 'and', 'she', 'knew', 'her', 'life', 'would', 'never', 'be', 'the', 'same.'], ['Was', 'it', 'enough?', 'That', 'was', 'the', 'question', 'he', 'kept', 'asking', 'himself.', 'Was', 'being', 'satisfied', 'enough?', 'He', 'looked', 'around', 'him', 'at', 'everyone', 'yearning', 'to', 'just', 'be', 'satisfied', 'in', 'their', 'daily', 'life', 'and', 'he', 'had', 'reached', 'that', 'goal.', 'He', 'knew', 'that', 'he', 'was', 'satisfied', 'and', 'he', 'also', 'knew', 'it', "wasn't", 'going', 'to', 'be', 'enough.'], ['The', 'wolves', 'stopped', 'in', 'their', 'tracks,', 'sizing', 'up', 'the', 'mother', 'and', 'her', 'cubs.', 'It', 'had', 'been', 'over', 'a', 'week', 'since', 'their', 'last', 'meal', 'and', 'they', 'were', 'getting', 'desperate.', 'The', 'cubs', 'would', 'make', 'a', 'good', 'meal,', 'but', 'there', 'were', 'high', 'risks', 'taking', 'on', 'the', 'mother', 'Grizzly.', 'A', 'decision', 'had', 'to', 'be', 'made', 'and', 'the', 'wrong', 'choice', 'could', 'signal', 'the', 'end', 'of', 'the', 'pack.'], ['He', 'knew', 'what', 'he', 'was', 'supposed', 'to', 'do.', 'That', 'had', 'been', 'apparent', 'from', 'the', 'beginning.', 'That', 'was', 'what', 'made', 'the', 'choice', 'so', 'difficult.', 'What', 'he', 'was', 'supposed', 'to', 'do', 'and', 'what', 'he', 'would', 'do', 'were', 'not', 'the', 'same.', 'This', 'would', 'have', 'been', 'fine', 'if', 'he', 'were', 'willing', 'to', 'face', 'the', 'inevitable', 'consequences,', 'but', 'he', "wasn't."], ['What', 'were', 'they', 'eating?', 'It', "didn't", 'taste', 'like', 'anything', 'she', 'had', 'ever', 'eaten', 'before', 'and', 'although', 'she', 'was', 'famished,', 'she', "didn't", 'dare', 'ask.', 'She', 'knew', 'the', 'answer', 'would', 'be', 'one', 'she', "didn't", 'want', 'to', 'hear.'], ['It', 'was', 'going', 'to', 'rain.', 'The', 'weather', 'forecast', "didn't", 'say', 
'that,', 'but', 'the', 'steel', 'plate', 'in', 'his', 'hip', 'did.', 'He', 'had', 'learned', 'over', 'the', 'years', 'to', 'trust', 'his', 'hip', 'over', 'the', 'weatherman.', 'It', 'was', 'going', 'to', 'rain,', 'so', 'he', 'better', 'get', 'outside', 'and', 'prepare.'], ['The', 'young', 'man', 'wanted', 'a', 'role', 'model.', 'He', 'looked', 'long', 'and', 'hard', 'in', 'his', 'youth,', 'but', 'that', 'role', 'model', 'never', 'materialized.', 'His', 'only', 'choice', 'was', 'to', 'embrace', 'all', 'the', 'people', 'in', 'his', 'life', 'he', "didn't", 'want', 'to', 'be', 'like.'], ['Where', 'do', 'they', 'get', 'a', 'random', 'paragraph?"', 
'he', 'wondered', 'as', 'he', 'clicked', 'the', 'generate', 'button.', 'Do', 'they', 'just', 'write', 'a', 'random', 'paragraph', 'or', 'do', 'they', 'get', 'it', 'somewhere?', 'At', 'that', 'moment', 'he', 'read', 'the', 'random', 'paragraph', 'and', 'realized', 'it', 'was', 'about', 'random', 'paragraphs', 'and', 'his', 'world', 'would', 'never', 'be', 'the', 'same.'], ['Sometimes', "that's", 'just', 'the', 'way', 'it', 'has', 'to', 'be.', 'Sure,', 'there', 'were', 'probably', 'other', 'options,', 'but', 'he', "didn't", 'let', 'them', 'enter', 'his', 'mind.', 'It', 'was', 'done', 'and', 'that', 'was', 'that.', 'It', 'was', 'just', 'the', 'way', 'it', 'had', 'to', 'be.'], ['Her', 'mom', 'had', 'warned', 'her.', 'She', 'had', 'been', 'warned', 'time', 'and', 'again,', 'but', 'she', 'had', 'refused', 'to', 'believe', 'her.', 'She', 'had', 'done', 'everything', 'right', 'and', 'she', 'knew', 'she', 'would', 'be', 'rewarded', 'for', 'doing', 'so', 'with', 'the', 'promotion.', 'So', 'when', 'the', 'promotion', 'was', 'given', 'to', 'her', 'main', 'rival,', 'it', 'not', 'only', 'stung,', 'it', 'threw', 'her', 'belief', 'system', 'into', 'disarray.', 'It', 'was', 'her', 'first', 'big', 'lesson', 'in', 'life,', 'but', 'not', 'the', 'last.'], ['One', 'dollar', 'and', 'eighty-seven', 'cents.', 'That', 'was', 'all.', 'And', 'sixty', 'cents', 'of', 'it', 'was', 'in', 'pennies.', 'Pennies', 'saved', 'one', 'and', 'two', 'at', 'a', 'time', 'by', 'bulldozing', 'the', 'grocer', 'and', 'the', 'vegetable', 'man', 'and', 'the', 'butcher', 'until', 'one’s', 'cheeks', 'burned', 'with', 'the', 'silent', 'imputation', 'of', 'parsimony', 'that', 'such', 'close', 'dealing', 'implied.', 'One', 'dollar', 'and', 'eighty-seven', 'cents.', 'And', 'the', 'next', 'day', 'would', 'be', 'Christmas...'], ['He', 'picked', 'up', 'the', 'burnt', 'end', 'of', 'the', 'branch', 'and', 'made', 'a', 'mark', 'on', 'the', 'stone.', 'Day', '52', 'if', 'the', 'marks', 'on', 'the', 'stone', 'were', 'accurate.', 'He', "couldn't", 'be', 'sure.', 'Day', 'and', 'nights', 'had', 'begun', 'to', 'blend', 'together', 'creating', 'confusion,', 'but', 'he', 'knew', 'it', 'was', 'a', 'long', 'time.', 'Much', 'too', 'long.'], ['It', 'went', 'through', 'such', 'rapid', 'contortions', 'that', 'the', 'little', 'bear', 'was', 'forced', 'to', 'change', 'his', 'hold', 'on', 'it', 'so', 'many', 'times', 'he', 
'became', 'confused', 'in', 'the', 'darkness,', 'and', 'could', 'not,', 'for', 'the', 'life', 'of', 'him,', 'tell', 'whether', 'he', 'held', 'the', 'sheep', 'right', 'side', 'up,', 'or', 'upside', 'down.', 'But', 'that', 'point', 'was', 'decided', 'for', 'him', 'a', 'moment', 'later', 'by', 'the', 'animal', 'itself,', 'who,', 'with', 'a', 'sudden', 'twist,', 'jabbed', 'its', 'horns', 'so', 'hard', 'into', 'his', 'lowest', 'ribs', 
'that', 'he', 'gave', 'a', 'grunt', 'of', 'anger', 'and', 'disgust.'], ['There', 'once', 'lived', 'an', 'old', 'man', 'and', 'an', 'old', 'woman', 'who', 'were', 'peasants', 'and', 'had', 'to', 'work', 'hard', 'to', 'earn', 'their', 'daily', 'bread.', 'The', 'old', 'man', 'used', 'to', 'go', 'to', 'fix', 'fences', 'and', 'do', 'other', 'odd', 'jobs', 'for', 'the', 'farmers', 'around,', 'and', 'while', 'he', 'was', 'gone', 'the', 'old', 'woman,', 'his', 'wife,', 'did', 'the', 'work', 'of', 'the', 'house', 'and', 'worked', 'in', 'their', 'own', 'little', 'plot', 'of', 'land.'], ['Do', 'you', 'think', "you're", 'living', 'an', 'ordinary', 'life?', 'You', 'are', 'so', 'mistaken', "it's", 'difficult', 'to', 'even', 'explain.', 'The', 'mere', 'fact', 'that', 'you', 'exist', 'makes', 'you', 'extraordinary.', 'The', 'odds', 'of', 'you', 'existing', 'are', 'less', 
'than', 'winning', 'the', 'lottery,', 'but', 'here', 'you', 'are.', 'Are', 'you', 'going', 'to', 'let', 'this', 'extraordinary', 'opportunity', 'pass?'], ['He', 'sat', 'across', 'from', 'her', 'trying', 'to', 'imagine', 'it', 'was', 'the', 'first', 'time.', 'It', "wasn't.", 'Had', 'it', 'been', 'a', 'hundred?', 'It', 'quite', 'possibly', 'could', 'have', 'been.', 'Two', 'hundred?', 'Probably', 'not.', 'His', 'mind', 'wandered', 'until', 'he', 'caught', 'himself', 'and', 'again', 'tried', 'to', 'imagine', 'it', 'was', 'the', 'first', 'time.'], ['I', 'recently', 'discovered', 'I', 'could', 'make', 'fudge', 'with', 'just', 'chocolate', 'chips,', 
'sweetened', 'condensed', 'milk,', 'vanilla', 'extract,', 'and', 'a', 'thick', 'pot', 'on', 'slow', 'heat.', 'I', 'tried', 'it', 'with', 'dark', 'chocolate', 'chunks', 'and', 'I', 'tried', 'it', 'with', 'semi-sweet', 
'chocolate', 'chips.', "It's", 'better', 'with', 'both', 'kinds.', 'It', 'comes', 'out', 'pretty', 'bad', 'with', 'just', 'the', 'dark', 'chocolate.', 'The', 'best', 'add-ins', 'are', 'crushed', 'almonds', 'and', 'marshmallows', '--', 'what', 'you', 'get', 'from', 'that', 'is', 'Rocky', 'Road.', 'It', 'takes', 'about', 'twenty', 'minutes', 'from', 'start', 'to', 'fridge,', 'and', 'then', 'it', 'takes', 'about', 'six', 'months', 'to', 'work', 'off', 'the', 'twenty', 'pounds', 'you', 'gain', 'from', 'eating', 'it.', 'All', 'things', 'in', 'moderation,', 'friends.', 'All', 'things', 'in', 'moderation.'], ["It's", 'not', 'his', 'fault.', 'I', 'know', "you're", 'going', 'to', 'want', 'to,', 'but', 'you', "can't", 'blame', 'him.', 'He', 'really', 'has', 'no', 'idea', 'how', 'it', 'happened.', 'I', 'kept', 'trying', 'to', 'come', 'up', 'with', 'excuses', 'I', 'could', 'say', 'to', 'mom', 'that', 'would', 'keep', 'her', 'calm', 'when', 'she', 'found', 'out', 'what', 'happened,', 'but', 'the', 'more', 'I', 'tried,', 'the', 'more', 'I', 'could', 'see', 'none', 'of', 'them', 'would', 'work.', 'He', 'was', 'going', 'to', 'get', 'her', 'wrath', 'and', 'there', 'was', 'nothing', 'I', 'could', 'say', 'to', 'prevent', 'it.'], ['She', 'patiently', 'waited', 'for', 'his', 'number', 'to', 'be', 'called.', 'She', 'had', 'no', 'desire', 'to', 'be', 'there,', 'but', 'her', 'mom', 'had', 'insisted', 'that', 'she', 'go.', "She's", 'resisted', 'at', 'first,', 'but', 'over', 'time', 'she', 'realized', 'it', 'was', 'simply', 'easier', 'to', 'appease', 'her', 'and', 'go.', 'Mom', 'tended', 'to', 'be', 'that', 'way.', 'She', 'would', 'keep', 'insisting', 'until', 'you', 'wore', 'down', 'and', 'did', 'what', 'she', 'wanted.', 'So,', 'here', 'she', 'sat,', 'patiently', 'waiting', 'for', 'her', 'number', 'to', 'be', 'called.'], ['"Are', 'you', 'getting', 'my', 'texts???"', 'she', 'texted', 'to', 'him.', 'He', 'glanced', 'at', 'it', 'and', 'chuckled', 
'under', 'his', 'breath.', 'Of', 'course', 'he', 'was', 'getting', 'them,', 'but', 'if', 'he', "wasn't", 'getting', 'them,', 'how', 'would', 'he', 'ever', 'be', 'able', 'to', 'answer?', 'He', 'put', 'the', 'phone', 'down', 'and', 'continued', 'on', 'his', 'project.', 'He', 'was', 'ignoring', 'her', 'texts', 'and', 'he', 'planned', 'to', 'continue', 'to', 'do', 'so.'], ['What', 'was', 'beyond', 'the', 'bend', 'in', 'the', 'stream', 'was', 'unknown.', 'Both', 'were', 'curious,', 'but', 'only', 'one', 'was', 'brave', 'enough', 'to', 'want', 'to', 'explore.', 'That', 'was', 'the', 'problem.', 'There', 'was', 'always', 'one', 'that', 'let', 'fear', 'rule', 'her', 'life.'], ['Then', 'came', 'the', 'night', 'of', 'the', 'first', 'falling', 'star.', 'It', 'was', 'seen', 'early', 'in', 'the', 'morning,', 'rushing', 'over', 'Winchester', 'eastward,', 'a', 'line', 'of', 'flame', 'high', 'in', 'the', 'atmosphere.', 'Hundreds', 'must', 'have', 'seen', 'it', 'and', 'taken', 'it', 'for', 'an', 'ordinary', 'falling', 'star.', 'It', 'seemed', 'that', 'it', 'fell', 'to', 'earth', 'about', 'one', 'hundred', 'miles', 'east', 'of', 'him.'], ['There', 'was', 'something', 'special', 'about', 'this', 'little', 'creature.', 'Donna', "couldn't", 'quite', 'pinpoint', 'what', 'it', 'was,', 'but', 'she', 'knew', 'with', 'all', 'her', 'heart', 'that', 'it', 'was', 'true.', 'It', "wasn't", 'a', 'matter', 'of', 'if', 'she', 'was', 'going', 'to', 'try', 'and', 'save', 'it,', 'but', 'a', 'matter', 'of', 'how', 'she', 'was', 'going', 'to', 'save', 'it.', 'She', 'went', 'back', 'to', 'the', 'car', 'to', 'get', 'a', 'blanket', 'and', 'when', 'she', 'returned', 'the', 'creature', 'was', 'gone.'], ['Dave', 'watched', 'as', 'the', 'forest', 'burned', 'up', 'on', 'the', 'hill,', 'only', 'a', 'few', 'miles', 'from', 'her', 'house.', 'The', 'car', 'had', 'been', 'hastily', 'packed', 'and', 'Marta', 'was', 'inside', 'trying', 'to', 'round', 'up', 'the', 'last', 'of', 'the', 'pets.', 'Dave', 'went', 'through', 'his', 'mental', 'list', 'of', 'the', 'most', 'important', 'papers', 'and', 'documents', 'that', 'they', "couldn't", 'leave', 'behind.', 'He', 'scolded', 'himself', 'for', 'not', 'having', 'prepared', 'these', 'better', 'in', 'advance', 'and', 'hoped', 'that', 'he', 'had', 'remembered', 'everything', 'that', 'was', 'needed.', 'He', 'continued', 'to', 'wait', 'for', 'Marta', 'to', 'appear', 'with', 'the', 'pets,', 'but', 'she', 'still', 'was', 'nowhere', 'to', 'be', 'seen.'], ['The', 'headphones', 'were', 'on.', 'They', 'had', 'been', 'utilized', 'on', 'purpose.', 'She', 'could', 'hear', 'her', 'mom', 'yelling', 'in', 'the', 'background,', 'but', "couldn't", 'make', 'out', 'exactly', 'what', 'the', 'yelling', 'was', 'about.', 'That', 'was', 'exactly', 'why', 'she', 'had', 'put', 'them', 'on.', 'She', 'knew', 'her', 'mom', 'would', 'enter', 'her', 'room', 'at', 'any', 'minute,', 'and', 'she', 'could', 'pretend', 'that', 'she', "hadn't", 'heard', 'any', 'of', 'the', 'previous', 'yelling.'], ['The', 'lone', 'lamp', 'post', 'of', 'the', 'one-street', 'town', 'flickered,', 'not', 'quite', 'dead', 'but', 'definitely', 'on', 'its', 'way', 'out.', 'Suitcase', 'by', 'her', 'side,', 'she', 'paid', 'no', 'heed', 'to', 'the', 'light,', 'the', 'street', 'or', 'the', 'town.', 'A', 'car', 'was', 'coming', 'down', 'the', 'street', 'and', 'with', 'her', 'arm', 'outstretched', 'and', 'thumb', 'in', 'the', 'air,', 'she', 'had', 'a', 'plan.'], ['She', 'had', 'come', 'to', 'the', 'conclusion', 'that', 'you', 'could', 'tell', 'a', 'lot', 'about', 'a', 'person', 'by', 'their', 'ears.', 'The', 'way', 'they', 'stuck', 'out', 'and', 'the', 'size', 'of', 'the', 'earlobes', 'could', 'give', 'you', 'wonderful', 'insights', 'into', 'the', 'person.', 'Of', 'course,', 'she', "couldn't", 'scientifically', 'prove', 'any', 'of', 'this,', 'but', 'that', "didn't", 'matter', 'to', 'her.', 'Before', 'anything', 
'else,', 'she', 'would', 'size', 'up', 'the', 'ears', 'of', 'the', 'person', 'she', 'was', 'talking', 'to.'], ['I', 'recollect', 'that', 'my', 'first', 'exploit', 'in', 'squirrel-shooting', 'was', 'in', 'a', 'grove', 
'of', 'tall', 'walnut-trees', 'that', 'shades', 'one', 'side', 'of', 'the', 'valley.', 'I', 'had', 'wandered', 'into', 'it', 'at', 'noontime,', 'when', 'all', 'nature', 'is', 'peculiarly', 'quiet,', 'and', 'was', 'startled', 'by', 'the', 'roar', 'of', 'my', 'own', 'gun,', 'as', 'it', 'broke', 'the', 'Sabbath', 'stillness', 'around', 'and', 'was', 'prolonged', 'and', 'reverberated', 'by', 'the', 'angry', 'echoes.'], ['She', 'sat', 
'in', 'the', 'darkened', 'room', 'waiting.', 'It', 'was', 'now', 'a', 'standoff.', 'He', 'had', 'the', 'power', 'to', 'put', 'her', 'in', 'the', 'room,', 'but', 'not', 'the', 'power', 'to', 'make', 'her', 'repent.', 'It', "wasn't", 'fair', 'and', 'no', 'matter', 'how', 'long', 'she', 'had', 'to', 'endure', 'the', 'darkness,', 'she', "wouldn't", 'change', 'her', 'attitude.', 'At', 'three', 'years', 'old,', "Sandy's", 'stubborn', 'personality', 'had', 'already', 'bloomed', 'into', 'full', 'view.'], ['It', 'was', 'easy', 'to', 'spot', 'her.', 'All', 'you', 'needed', 'to', 'do', 'was', 'look', 'at', 'her', 'socks.', 'They', 'were', 'never', 'a', 'matching', 'pair.', 'One', 'would', 'be', 'green', 'while', 'the', 'other', 'would', 'be', 'blue.', 'One', 'would', 'reach', 'her', 'knee', 'while', 'the', 'other', 'barely', 'touched', 'her', 'ankle.', 'Every', 'other', 'part', 'of', 'her', 'was', 'perfect,', 'but', 'never', 'the', 'socks.', 'They', 'were', 'her', 'micro', 'act', 'of', 'rebellion.'], ['It', 'went', 'through', 'such', 'rapid', 'contortions', 'that', 'the', 'little', 'bear', 'was', 'forced', 'to', 'change', 'his', 'hold', 'on', 'it', 'so', 'many', 'times', 'he', 'became', 'confused', 'in', 'the', 'darkness,', 'and', 'could', 'not,', 'for', 'the', 'life', 'of', 'him,', 'tell', 'whether', 'he', 'held', 'the', 'sheep', 'right', 'side', 'up,', 'or', 'upside', 'down.', 'But', 'that', 'point', 'was', 'decided', 'for', 'him', 'a', 'moment', 'later', 'by', 'the', 'animal', 'itself,', 'who,', 'with', 'a', 'sudden', 'twist,', 'jabbed', 'its', 'horns', 'so', 'hard', 'into', 'his', 'lowest', 'ribs', 'that', 'he', 'gave', 'a', 'grunt', 'of', 'anger', 'and', 'disgust.'], ['At', 'that', 'moment', 'he', 'had', 'a', 'thought', 'that', "he'd", 'never', 'imagine', "he'd", 'consider.', '"I', 'could', 'just', 'cheat,"', 'he', 'thought,', '"and', 'that', 'would', 'solve', 'the', 'problem."', 'He', 'tried', 'to', 'move', 'on', 'from', 'the', 'thought', 'but', 'it', 'was', 'persistent.', 'It', "didn't", 'want', 'to', 'go', 'away', 'and,', 'if', 'he', 'was', 'honest', 'with', 'himself,', 'he', "didn't", 'want', 'it', 'to.'], ['Where', 'do', 'they', 'get', 'a', 'random', 'paragraph?"', 'he', 'wondered', 'as', 'he', 'clicked', 'the', 'generate', 'button.', 'Do', 'they', 'just', 'write', 'a', 'random', 'paragraph', 'or', 'do', 'they', 'get', 'it', 'somewhere?', 'At', 'that', 'moment', 'he', 'read', 'the', 'random', 'paragraph', 'and', 'realized', 'it', 'was', 'about', 'random', 'paragraphs', 'and', 'his', 'world', 'would', 'never', 'be', 'the', 'same.'], ['She', 'considered', 'the', 'birds', 'to', 'be', 'her', 'friends.', "She'd", 'put', 'out', 'food', 'for', 'them', 'each', 'morning', 'and', 'then', "she'd", 'watch', 'as', 'they', 'came', 'to', 'the', 'feeders', 'to', 'gorge', 'themselves', 'for', 'the', 'day.', 'She', 'wondered', 'what', 'they', 'would', 'do', 'if', 'something', 'ever', 'happened', 'to', 'her.', 'Would', 'they', 'miss', 'the', 'meals', 'she', 'provided', 'if', 'she', 'failed', 'to', 'put', 'out', 'the', 'food', 'one', 'morning?'], ['The', 'computer', "wouldn't", 'start.', 'She', 'banged', 'on', 'the', 'side', 'and', 'tried', 'again.', 'Nothing.', 'She', 'lifted', 'it', 'up', 'and', 'dropped', 'it', 'to', 'the', 'table.', 'Still', 'nothing.', 'She', 'banged', 'her', 'closed', 'fist', 'against', 'the', 'top.', 'It', 'was', 'at', 'this', 'moment', 'she', 'saw', 'the', 'irony', 'of', 'trying', 'to', 'fix', 'the', 'machine', 'with', 'violence.'], ['Hopes', 'and', 'dreams', 'were', 'dashed', 'that', 'day.', 'It', 'should', 'have', 'been', 'expected,', 'but', 'it', 'still', 'came', 'as', 'a', 'shock.', 'The', 'warning', 'signs', 'had', 'been', 'ignored', 'in', 'favor', 'of', 'the', 'possibility,', 'however', 'remote,', 'that', 'it', 'could', 'actually', 'happen.', 'That', 'possibility', 'had', 'grown', 'from', 'hope', 'to', 'an', 'undeniable', 'belief', 'it', 'must', 'be', 'destiny.', 'That', 'was', 'until', 'it', "wasn't", 'and', 'the', 'hopes', 'and', 'dreams', 'came', 'crashing', 'down.'], ['The', 'trees,', 'therefore,', 'must', 'be', 'such', 'old', 'and', 'primitive', 'techniques', 'that', 'they', 'thought', 'nothing', 'of', 'them,', 'deeming', 'them', 'so', 'inconsequential', 'that', 'even', 'savages', 'like', 'us', 'would', 'know', 'of', 'them', 'and', 'not', 'be', 
'suspicious.', 'At', 'that,', 'they', 'probably', "didn't", 'have', 'too', 'much', 'time', 'after', 'they', 'detected', 'us', 'orbiting', 'and', 'intending', 'to', 'land.', 'And', 'if', 'that', 'were', 'true,', 'there', 'could', 'be', 'only', 'one', 'place', 'where', 'their', 'civilization', 'was', 'hidden.'], ['He', 'ordered', 'his', 'regular', 'breakfast.', 'Two', 'eggs', 'sunnyside', 'up,', 'hash', 'browns,', 'and', 'two', 'strips', 'of', 'bacon.', 'He', 'continued', 'to', 'look', 'at', 'the', 'menu', 'wondering', 'if', 'this', 'would', 'be', 'the', 'day', 'he', 'added', 'something', 'new.', 'This', 'was', 'also', 'part', 'of', 'the', 'routine.', 'A', 'few', 'seconds', 'of', 'hesitation', 'to', 'see', 'if', 'something', 'else', 'would', 'be', 'added', 'to', 'the', 'order', 'before', 'demuring', 'and', 'saying', 'that', 'would', 'be', 'all.', 'It', 'was', 'the', 'same', 'exact', 'meal', 'that', 'he', 'had', 'ordered', 'every', 'day', 'for', 'the', 'past', 'two', 'years.'], ['There', 'was', 'something', 'special', 'about', 'this', 'little', 'creature.', 'Donna', "couldn't", 'quite', 'pinpoint', 'what', 'it', 'was,', 'but', 'she', 'knew', 'with', 'all', 'her', 'heart', 'that', 'it', 'was', 'true.', 'It', "wasn't", 'a', 'matter', 'of', 'if', 'she', 'was', 'going', 'to', 'try', 'and', 'save', 'it,', 'but', 'a', 'matter', 'of', 'how', 'she', 'was', 'going', 'to', 'save', 'it.', 'She', 'went', 'back', 'to', 'the', 'car', 'to', 'get', 'a', 'blanket', 'and', 'when', 'she', 'returned', 'the', 'creature', 'was', 'gone.'], ['The', 'wolves', 'stopped', 'in', 'their', 'tracks,', 'sizing', 'up', 'the', 'mother', 'and', 'her', 'cubs.', 'It', 'had', 'been', 'over', 'a', 'week', 'since', 'their', 'last', 'meal', 'and', 'they', 'were', 'getting', 'desperate.', 'The', 'cubs', 'would', 'make', 'a', 'good', 'meal,', 'but', 'there', 'were', 'high', 'risks', 'taking', 'on', 'the', 'mother', 'Grizzly.', 'A', 'decision', 'had', 'to', 'be', 'made', 'and', 'the', 'wrong', 'choice', 'could', 'signal', 'the', 'end', 'of', 'the', 'pack.'], ['What', 'were', 'they', 'eating?', 'It', "didn't", 'taste', 'like', 'anything', 'she', 'had', 'ever', 'eaten', 'before', 
'and', 'although', 'she', 'was', 'famished,', 'she', "didn't", 'dare', 'ask.', 'She', 'knew', 'the', 'answer', 'would', 'be', 'one', 'she', "didn't", 'want', 'to', 'hear.'], ['You', 'know', 'that', 'tingly', 'feeling', 'you', 'get', 'on', 'the', 'back', 'of', 'your', 'neck', 'sometimes?', 'I', 'just', 'got', 'that', 'feeling', 'when', 'talking', 'with', 'her.', 'You', 'know', 'I', "don't", 'believe', 'in', 'sixth', 'senses,', 'but', 'there', 'is', 'something', 'not', 'right', 'with', 'her.', 'I', "don't", 'know', 'how', 'I', 'know,', 'but', 'I', 'just', 'do.'], ['It', 'was', 'a', 'weird', 'concept.', 'Why', 'would', 'I', 'really', 'need', 'to', 'generate', 'a', 'random', 'paragraph?', 'Could', 'I', 'actually', 'learn', 'something', 'from', 'doing', 'so?', 'All', 'these', 'questions', 'were', 'running', 'through', 'her', 'head', 'as', 'she', 'pressed', 'the', 'generate', 'button.', 'To', 'her', 'surprise,', 'she', 'found', 'what', 'she', 'least', 'expected', 'to', 'see.'], ['It', 'was', 'a', 'question', 'of', 'which', 'of', 'the', 'two', 'she', 'preferred.', 'On', 'the', 'one', 'hand,', 'the', 'choice', 'seemed', 'simple.', 'The', 'more', 'expensive', 'one', 'with', 'a', 'brand', 'name', 'would', 'be', 'the', 'choice', 'of', 'most.', 'It', 'was', 'the', 'easy', 'choice.', 'The', 'safe', 'choice.', 'But', 'she', "wasn't", 'sure', 'she', 'actually', 'preferred', 'it.'], ['He', 'was', 'an', 'expert', 'but', 'not', 'in', 'a', 'discipline', 'that', 'anyone', 'could', 'fully', 'appreciate.', 'He', 'knew', 'how', 'to', 'hold', 'the', 'cone', 'just', 'right', 'so', 'that', 'the', 'soft', 'server', 'ice-cream', 'fell', 'into', 'it', 'at', 'the', 'precise', 'angle', 'to', 'form', 'a', 'perfect', 'cone', 'each', 'and', 'every', 'time.', 'It', 'had', 'taken', 'years', 'to', 'perfect', 'and', 'he', 'could', 'now', 'do', 'it', 'without', 'even', 'putting', 'any', 'thought', 'behind', 'it.', 'Nobody', 'seemed', 'to', 'fully', 'understand', 'the', 'beauty', 'of', 'this', 'accomplishment', 'except', 'for', 'the', 'new', 'worker', 'who', 'watched', 'in', 'amazement.'], ["I've", 'rented', 'a', 'car', 'in', 'Las', 'Vegas', 'and', 'have', 'reserved', 'a', 'hotel', 'in', 'Twentynine', 'Palms', 'which', 'is', 'just', 'north', 'of', 'Joshua', 'Tree.', "We'll", 'drive', 'from', 'Las', 'Vegas', 'through', 'Mojave', 'National', 'Preserve', 'and', 'possibly', 'do', 'a', 'short', 'hike', 'on', 'our', 'way', 'down.', 'Then', 'spend', 'all', 'day', 'on', 'Monday', 'at', 'Joshua', 'Tree.', 'We', 'can', 'decide', 'the', 'next', 'morning', 'if', 'we', 'want', 'to', 'do', 'more', 'in', 'Joshua', 'Tree', 'or', 'Mojave', 'before', 'we', 'head', 'back.'], ['There', 'was', 'something', 'beautiful', 'in', 'his', 'hate.', 'It', "wasn't", 'the', 'hate', 'itself', 'as', 'it', 'was', 'a', 'disgusting', 'display', 'of', 'racism', 'and', 'intolerance.', 'It', 'was', 'what', 'propelled', 'the', 'hate', 'and', 'the', 'fact', 'that', 'although', 'he', 'had', 'this', 'hate,', 'he', "didn't", 'understand', 'where', 'it', 'came', 'from.', 'It', 'was', 'at', 'that', 'moment', 'that', 'she', 'realized', 'that', 'there', 'was', 'hope', 'in', 'changing', 'him.'], ['I', 'inadvertently', 'went', 'to', "See's", 'Candy', 'last', 'week', '(I', 'was', 'in', 
'the', 'mall', 'looking', 'for', 'phone', 'repair),', 'and', 'as', 'it', 'turns', 'out,', "See's", 'Candy', 'now', 'charges', 'a', 'dollar', '--', 'a', 'full', 'dollar', '--', 'for', 'even', 'the', 'simplest', 'of', 'their', 'wee', 'confection', 'offerings.', 'I', 'bought', 'two', 'chocolate', 'lollipops', 'and', 'two', 'chocolate-caramel-almond', 'things.', 'The', 'total', 'cost', 'was', 'four-something.', 'I', 'mean,', 'the', 'candies', 'were', 'tasty', 'and', 'all,', 'but', "let's", 'be', 'real:', 'A', 'Snickers', 'bar', 'is', 'fifty', 'cents.', 'After', 'this', 'dollar-per-candy', 'revelation,', 'I', 'may', 'not', 'find', 'myself', 'wandering', 'dreamily', 'back', 'into', 'a', "See's", 'Candy', 'any', 'time', 'soon.'], ["It's", 'not', 'his', 'fault.', 'I', 'know', "you're", 'going', 'to', 'want', 'to,', 'but', 'you', "can't", 'blame', 'him.', 'He', 'really', 'has', 'no', 'idea', 'how', 'it', 'happened.', 'I', 'kept', 'trying', 'to', 'come', 'up', 'with', 'excuses', 'I', 'could', 'say', 'to', 'mom', 'that', 'would', 'keep', 'her', 'calm', 'when', 'she', 'found', 'out', 'what', 'happened,', 'but', 'the', 'more', 'I', 'tried,', 'the', 'more', 'I', 'could', 'see', 'none', 'of', 'them', 'would', 'work.', 'He', 'was', 'going', 'to', 'get', 'her', 'wrath', 'and', 'there', 'was', 'nothing', 'I', 'could', 'say', 'to', 'prevent', 'it.'], ["Here's", 'the', 'thing.', 'She', "doesn't", 'have', 'anything', 'to', 'prove,', 'but', 'she', 'is', 'going', 'to', 'anyway.', "That's", 'just', 'her', 'character.', 'She', 'knows', 'she', "doesn't", 'have', 'to,', 'but', 'she', 'still', 'will', 'just', 'to', 'show', 'you', 'that', 'she', 'can.', 'Doubt', 'her', 'more', 'and', "she'll", 'prove', 'she', 'can', 'again.', 'We', 'all', 'already', 'know', 'this', 'and', 'you', 'will', 'too.'], ['Since', 'they', 'are', 'still', 'preserved', 'in', 'the', 'rocks', 'for', 'us', 'to', 'see,', 'they', 'must', 'have', 'been', 'formed', 'quite', 'recently,', 'that', 'is,', 'geologically', 'speaking.', 'What', 'can', 'explain', 'these', 'striations', 'and', 'their', 'common', 'orientation?', 'Did', 'you', 'ever', 'hear', 'about', 'the', 'Great', 'Ice', 'Age', 'or', 'the', 'Pleistocene', 'Epoch?', 'Less', 'than', 'one', 'million', 'years', 'ago,', 'in', 'fact,', 'some', '12,000', 'years', 'ago,', 'an', 'ice', 'sheet', 'many', 'thousands', 'of', 'feet', 'thick', 'rode', 'over', 'Burke', 'Mountain', 'in', 'a', 'southeastward', 'direction.', 'The', 'many', 'boulders', 'frozen', 'to', 'the', 'underside', 'of', 'the', 'ice', 'sheet', 'tended', 'to', 'scratch', 'the', 'rocks', 'over', 'which', 'they', 'rode.', 'The', 'scratches', 'or', 'striations', 'seen', 'in', 'the', 'park', 'rocks', 'were', 'caused', 'by', 'these', 'attached', 'boulders.', 'The', 'ice', 'sheet', 'also', 'plucked', 'and', 'rounded', 'Burke', 'Mountain', 'into', 'the', 'shape', 'it', 'possesses', 'today.'], ['A', 'long', 'black', 'shadow', 'slid', 'across', 'the', 'pavement', 'near', 'their', 'feet', 'and', 'the', 'five', 'Venusians,', 'very', 'much', 'startled,', 'looked', 'overhead.', 'They', 'were', 'barely', 'in', 'time', 'to', 'see', 'the', 'huge', 'gray', 'form', 'of', 'the', 'carnivore', 'before', 'it', 'vanished', 'behind', 'a', 'sign', 'atop', 'a', 'nearby', 'building', 'which', 'bore', 'the', 'mystifying', 'information', '"Pepsi-Cola."'], ['What', 'was', 'beyond', 'the', 'bend', 'in', 'the', 'stream', 'was', 'unknown.', 'Both', 'were', 'curious,', 'but', 'only', 'one', 'was', 'brave', 'enough', 'to', 'want', 'to', 'explore.', 'That', 'was', 'the', 'problem.', 'There', 'was', 'always', 'one', 'that', 'let', 'fear', 'rule', 'her', 'life.'], ['She', 'patiently', 'waited', 'for', 'his', 'number', 'to', 'be', 'called.', 'She', 'had', 'no', 'desire', 'to', 'be', 'there,', 'but', 'her', 'mom', 'had', 'insisted', 'that', 'she', 'go.', "She's", 'resisted', 'at', 'first,', 'but', 'over', 'time', 'she', 'realized', 'it', 'was', 'simply', 'easier', 'to', 'appease', 'her', 'and', 'go.', 'Mom', 'tended', 'to', 'be', 'that', 'way.', 'She', 'would', 'keep', 'insisting', 'until', 'you', 'wore', 'down', 'and', 'did', 'what', 'she', 'wanted.', 'So,', 'here', 'she', 'sat,', 'patiently', 'waiting', 'for', 'her', 'number', 'to', 'be', 'called.'], ['There', 'was', 'something', 'in', 'the', 'tree.', 'It', 'was', 'difficult', 'to', 'tell', 'from', 
'the', 'ground,', 'but', 'Rachael', 'could', 'see', 'movement.', 'She', 'squinted', 'her', 'eyes', 'and', 'peered', 'in', 'the', 'direction', 'of', 'the', 'movement,', 'trying', 'to', 'decipher', 'exactly', 'what', 'she', 'had', 'spied.', 'The', 'more', 'she', 'peered,', 'however,', 'the', 'more', 'she', 'thought', 'it', 'might', 'be', 'a', 'figment', 'of', 'her', 'imagination.', 'Nothing', 'seemed', 'to', 'move', 'until', 'the', 
'moment', 'she', 'began', 'to', 'take', 'her', 'eyes', 'off', 'the', 'tree.', 'Then', 'in', 'the', 'corner', 'of', 'her', 'eye,', 'she', 'would', 'see', 'the', 'movement', 'again', 'and', 'begin', 'the', 'process', 'of', 'staring', 'again.'], ['It', 'was', 'a', "rat's", 'nest.', 'Not', 'a', 'literal', 'one,', 'but', 'that', 'is', 'what', 'her', 'hair', 'seemed', 'to', 'resemble', 'every', 'morning', 'when', 'she', 'got', 'up.', 'It', 'was', 'going', 'to', 'take', 'at', 'least', 'an', 'hour', 'to', 'get', 'it', 'under', 'control', 'and', 'she', 'was', 'sick', 'and', 'tired', 'of', 'it.', 'She', 'peered', 'into', 'the', 'mirror', 'and', 'wondered', 'if', 'it', 'was', 'worth', 'it.', 'It', "wasn't.", 'She', 'opened', 'the', 'drawer', 'and', 'picked', 'up', 'the', 'hair', 'clippers.'], ['Sometimes', 'there', "isn't", 'a', 'good', 'answer.', 'No', 'matter', 'how', 'you', 'try', 'to', 'rationalize', 'the', 'outcome,', 'it', "doesn't", 'make', 'sense.', 'And', 'instead', 'of', 'an', 'answer,', 'you', 'are', 'simply', 'left', 'with', 'a', 'question.', 'Why?'], ['She', 'had', 'been', 'told', 'time', 'and', 'time', 'again', 'that', 'the', 'most', 'important', 'steps', 'were', 'the', 'first', 'and', 'the', 'last.', 'It', 'was', 'something', 'that', 'she', 'carried', 'within', 'her', 'in', 'everything', 'she', 'did,', 'but', 'then', 'he', 'showed', 'up', 'and', 'disrupted', 'everything.', 'He', 'told', 'her', 'that', 'she', 'had', 'it', 'wrong.', 'The', 'first', 'step', "wasn't", 'the', 'most', 'important.', 'The', 'last', 'step', "wasn't", 'the', 'most', 'important.', 'It', 'was', 'the', 'next', 'step', 'that', 'was', 'the', 'most', 'important.'], ['The', 'leather', 'jacked', 'showed', 'the', 'scars', 'of', 'being', 'his', 'favorite', 'for', 'years.', 'It', 'wore', 'those', 'scars', 'with', 'pride,', 'feeling', 'that', 'they', 'enhanced', 'his', 'presence', 'rather', 'than', 'diminishing', 'it.', 'The', 'scars', 'gave', 'it', 'character', 'and', 'had', 'not', 'overwhelmed', 'to', 'the', 'point', 'that', 'it', 'had', 'become', 'ratty.', 'The', 'jacket', 'was', 'in', 'its', 'prime', 'and', 'it', 'knew', 'it.'], ['He', 'heard', 'the', 'crack', 'echo', 'in', 'the', 'late', 'afternoon', 'about', 'a', 'mile', 'away.', 'His', 'heart', 'started', 'racing', 'and', 'he', 'bolted', 'into', 'a', 'full', 'sprint.', '"It', "wasn't", 'a', 'gunshot,', 'it', "wasn't", 'a', 'gunshot,"', 'he', 'repeated', 'under', 'his', 'breathlessness', 'as', 'he', 'continued', 'to', 'sprint.'], ['Things', "aren't", 'going', 'well', 'at', 'all', 'with', 'mom', 'today.', 'She', 'is', 'just', 'a', 'limp', 'noodle', 'and', 'wants', 'to', 'sleep', 'all', 'the', 'time.', 'I', 'sure', 'hope', 'that', 'things', 'get', 'better', 'soon.'], ['The', 'boy', 'walked', 'down', 'the', 'street', 'in', 'a', 'carefree', 'way,', 'playing', 'without', 'notice', 'of', 'what', 'was', 'about', 'him.', 'He', "didn't", 'hear', 'the', 'sound', 'of', 'the', 'car', 'as', 'his', 'ball', 'careened', 'into', 'the', 'road.', 'He', 'took', 'a', 'step', 'toward', 'it,', 'and', 'in', 'doing', 'so', 'sealed', 'his', 'fate.'], ['Sometimes', "that's", 'just', 'the', 'way', 'it', 'has', 'to', 'be.', 'Sure,', 'there', 'were', 'probably', 'other', 'options,', 'but', 'he', "didn't", 'let', 'them', 'enter', 'his', 'mind.', 'It', 'was', 'done', 'and', 'that', 'was', 'that.', 'It', 'was', 'just', 'the', 'way', 'it', 'had', 'to', 'be.'], ['Her', 'eyebrows', 'were', 'a', 'shade', 'darker', 'than', 'her', 'hair.', 'They', 'were', 'thick', 'and', 'almost', 'horizontal,', 'emphasizing', 'the', 'depth', 'of', 'her', 'eyes.', 'She', 'was', 'rather', 'handsome', 'than', 'beautiful.', 'Her', 'face', 'was', 'captivating', 'by', 'reason', 'of', 'a', 'certain', 'frankness', 'of', 'expression', 'and', 'a', 'contradictory', 'subtle', 'play', 'of', 'features.', 'Her', 'manner', 'was', 'engaging.'], ['He', 'sat', 'across', 'from', 'her', 
'trying', 'to', 'imagine', 'it', 'was', 'the', 'first', 'time.', 'It', "wasn't.", 'Had', 'it', 'been', 'a', 'hundred?', 'It', 'quite', 'possibly', 'could', 'have', 'been.', 'Two', 'hundred?', 'Probably', 'not.', 'His', 'mind', 'wandered', 'until', 'he', 'caught', 'himself', 'and', 'again', 'tried', 'to', 'imagine', 'it', 'was', 'the', 'first', 'time.'], ['The', 'robot', 'clicked', 'disapprovingly,', 'gurgled', 'briefly', 'inside', 'its', 'cubical', 'interior', 'and', 'extruded', 'a', 'pony', 'glass', 'of', 'brownish', 'liquid.', '"Sir,', 'you', 'will', 'undoubtedly', 'end', 'up', 'in', 'a', "drunkard's", 'grave,', 'dead', 'of', 'hepatic', 'cirrhosis,"', 'it', 'informed', 'me', 'virtuously', 'as', 'it', 'returned', 'my', 'ID', 'card.', 'I', 'glared', 'as', 'I', 'pushed', 'the', 'glass', 'across', 'the', 'table.'], ['He', 'watched', 'as', 'the', 'young', 'man', 'tried', 'to', 'impress', 'everyone', 'in', 'the', 'room', 'with', 'his', 'intelligence.', 'There', 'was', 'no', 'doubt', 'that', 'he', 'was', 'smart.', 'The', 'fact', 'that', 'he', 'was', 'more', 'intelligent', 'than', 'anyone', 'else', 'in', 'the', 'room', 'could', 'have', 'been', 'easily', 'deduced,', 'but', 'nobody', 'was', 'really', 'paying', 'any', 'attention', 'due', 'to', 'the', 'fact', 'that', 'it', 'was', 'also', 'obvious', 'that', 'the', 'young', 'man', 'only', 'cared', 'about', 'his', 'intelligence.'], ['I', "haven't", 'bailed', 'on', 'writing.', 'Look,', "I'm", 'generating', 'a', 'random', 'paragraph', 'at', 'this', 'very', 'moment', 'in', 'an', 'attempt', 'to', 'get', 'my', 'writing', 'back', 'on', 'track.', 'I', 'am', 'making', 'an', 'effort.', 'I', 'will', 'start', 'writing', 'consistently', 'again!'], ['She', 'wanted', 'rainbow', 'hair.', "That's", 'what', 'she', 'told', 'the', 'hairdresser.', 'It', 'should', 'be', 'deep', 'rainbow', 'colors,', 'too.', 'She', "wasn't", 'interested', 'in', 'pastel', 'rainbow', 'hair.', 'She', 'wanted', 'it', 'deep', 'and', 'vibrant', 'so', 'there', 'was', 'no', 'doubt', 'that', 'she', 'had', 'done', 'this', 'on', 'purpose.'], ['I', 'recently', 'discovered', 'I', 'could', 'make', 'fudge', 'with', 'just', 'chocolate', 'chips,', 'sweetened', 'condensed', 'milk,', 'vanilla', 'extract,', 'and', 'a', 'thick', 'pot', 'on', 'slow', 'heat.', 'I', 'tried', 'it', 'with', 'dark', 'chocolate', 'chunks', 'and', 'I', 'tried', 'it', 'with', 'semi-sweet', 'chocolate', 'chips.', "It's", 'better', 'with', 'both', 'kinds.', 'It', 'comes', 'out', 'pretty', 'bad', 'with', 'just', 'the', 'dark', 'chocolate.', 'The', 'best', 'add-ins', 'are', 'crushed', 'almonds', 'and', 'marshmallows', '--', 'what', 'you', 'get', 'from', 'that', 'is', 'Rocky', 'Road.', 'It', 'takes', 'about', 'twenty', 'minutes', 'from', 'start', 'to', 'fridge,', 'and', 'then', 'it', 'takes', 'about', 'six', 'months', 'to', 'work', 'off', 'the', 'twenty', 'pounds', 'you', 'gain', 'from', 'eating', 'it.', 'All', 'things', 'in', 'moderation,', 'friends.', 'All', 'things', 'in', 'moderation.'], ['He', "couldn't", 'move.', 'His', 'head', 'throbbed', 'and', 'spun.', 'He', "couldn't", 'decide', 'if', 'it', 'was', 'the', 'flu', 'or', 'the', 'drinking', 'last', 'night.', 'It', 'was', 'probably', 'a', 'combination', 'of', 'both.'], ['There', 'was', 'no', 'time.', 'He', 'ran', 'out', 'of', 'the', 'door', 'without', 'half', 'the', 'stuff', 'he', 'needed', 'for', 'work,', 'but', 'it', "didn't", 'matter.', 'He', 'was', 'late', 'and', 'if', 'he', "didn't", 'make', 'this', 'meeting', 'on', 'time,', "someone's", 'life', 'may', 'be', 'in', 'danger.'], ["Don't", 'forget', 'that', 'gifts', 'often', 'come', 'with', 'costs', 'that', 'go', 'beyond', 'their', 'purchase', 'price.', 'When', 'you', 
'purchase', 'a', 'child', 'the', 'latest', 'smartphone,', "you're", 'also', 'committing', 'to', 'a', 'monthly', 'phone', 'bill.', 'When', 'you', 'purchase', 'the', 'latest', 'gaming', 'system,', "you're", 'likely', 'not', 'going', 'to', 'be', 'satisfied', 'with', 'the', 'games', 'that', 'come', 'with', 'it', 'for', 'long', 'and', 'want', 'to', 'purchase', 'new', 'titles', 'to', 'play.', 'When', 'you', 'buy', 'gifts', "it's", 'important', 'to', 'remember', 'that', 'some', 'come', 'with', 'additional', 'costs', 'down', 'the', 'road', 'that', 'can', 'be', 'much', 'more', 'expensive', 'than', 'the', 'initial', 'gift', 'itself.'], ['Josh', 'had', 'spent', 'year', 'and', 'year', 'accumulating', 'the', 'information.', 'He', 'knew', 'it', 'inside', 'out', 'and', 'if', 'there', 'was', 'ever', 'anyone', 'looking', 'for', 'an', 'expert', 'in', 'the', 'field,', 'Josh', 'would', 'be', 'the', 'one', 'to', 'call.', 'The', 'problem', 'was', 'that', 'there', 'was', 'nobody', 'interested', 'in', 'the', 'information', 'besides', 'him', 'and', 'he', 'knew', 'it.', 'Years', 'of', 'information', 'painstakingly', 'memorized', 'and', 'sorted', 'with', 'not', 'a', 'sole', 'giving', 'even', 'an', 'ounce', 'of', 'interest', 'in', 'the', 'topic.'], ['He', 'took', 'a', 'sip', 'of', 'the', 'drink.', 'He', "wasn't", 'sure', 'whether', 'he', 'liked', 'it', 'or', 'not,', 'but', 'at', 'this', 'moment', 'it', "didn't", 'matter.', 'She', 'had', 'made', 'it', 'especially', 'for', 'him', 'so', 'he', 'would', 'have', 'forced', 'it', 'down', 'even', 'if', 'he', 'had', 'absolutely', 'hated', 'it.', "That's", 'simply', 'the', 'way', 'things', 'worked.', 'She', 'made', 'him', 'a', 'new-fangled', 'drink', 'each', 'day', 'and', 'he', 'took', 'a', 'sip', 'of', 'it', 'and', 'smiled,', 'saying', 'it', 'was', 'excellent.'], ['One', 'dollar', 'and', 'eighty-seven', 'cents.', 'That', 'was', 'all.', 'And', 'sixty', 'cents', 'of', 'it', 'was', 'in', 'pennies.', 'Pennies', 'saved', 'one', 'and', 'two', 'at', 'a', 'time', 'by', 'bulldozing', 'the', 'grocer', 'and', 'the', 'vegetable', 'man', 'and', 'the', 'butcher', 'until', 'one’s', 'cheeks', 'burned', 'with', 'the', 'silent', 'imputation', 'of', 'parsimony', 'that', 'such', 'close', 'dealing', 'implied.', 'One', 'dollar', 'and', 'eighty-seven', 'cents.', 'And', 'the', 'next', 'day', 'would', 'be', 'Christmas...']];

var displayText = '';
var whitespaceCount = 0;
var correctChar = 0;
var incorrectChar = 0;
var timeLimit = 10;
var lengthLimit = 350;

var input;
var state; 
var mode; 
var time;

var flag;
// maybe add an array eventually that allows for more data of incorrect words and analyzing their meaning 


TIME_ELEM.innerHTML = 10 + 's';
WPM_ELEM.innerHTML = 'WPM  ';

WPM_NUM_ELEM.innerHTML = '--';
GWPM_ELEM.innerHTML = '00 ' + 'gWPM';
ACC_ELEM.innerHTML = '00.0% ' + 'acc';

CORR_ELEM.innerHTML = 'correct chars: 00';
INCORR_ELEM.innerHTML = 'incorrect chars: 00';
LIVE_WPM_ELEM.innerHTML = '127 WPM';


function timeChange(){
  reset();
}

function modeChange(){
  reset();
}

function lengthChange(){
  reset();
}

function checkBox(){
  reset();
}

function scramble(){
  if (flag == true) {
    flag = false;
  }
  else { 
    flag = true; 
  }
  reset();
}

function focusOnMe() {
  INP_ELEM.focus();
}

function selectQuote() {
  var currentWords = [];
  random_number1 = (Math.floor(Math.random() * quotes.length) + 1);
  quote = quotes[random_number1];
  var i = 0;
  while (i < quote.length){
    currentWords.push(quote[i]);
    i++;
  }
  displayText = currentWords;
  console.log(displayText);
  return(currentWords);
}

function makeSentence(){
  var length = lengthLimit;
  var currentWords = [];
  var i = 0;
  while (i < length){
    // there may be performance to be gained here
    random_number = (Math.floor(Math.random() * words.length) + 1);
    if (words[random_number] == undefined){
      i--;
    }
    else if (words[random_number].length >= 4 && i % 5 == 0){
      i--;
    }
    else{ 
      currentWords.push(words[random_number].toLowerCase());
    }
    i++;
  }
  displayText = currentWords;
  return(currentWords);
}

function setList(e) {
  displayText = e;
}


// make another fucntion to append more once the end is near 
function infiniteWords(){
  console.log("infite");
  newWords = [];
  for (var i = 0; i < 5; i++){
    tempWords = makeSentence();
    console.log(tempWords);
    for (var y = 0; y < tempWords.length; y++){
      newWords.push(tempWords[y]);
    }
  }
  console.log(newWords);
  displayText = newWords; 

}


function capWords(e){ 
  capitalWords = [];
  for (var i = 0; i < e.length; i++){
    var cap;
    random_number = (Math.floor(Math.random() * 5) + 1);
    try{
      random_number2 = (Math.floor(Math.random() * (e[i].length)) + 1);
      random_number3 = (Math.floor(Math.random() * random_number2) + 1);
      if (random_number == 2 || random_number == 3 || random_number == 4){
        cap = e[i].slice(0, random_number3) + e[i].slice(random_number3, random_number2).toUpperCase() + 
        e[i].slice(random_number2, e[i].length);
      }
      else{
        cap = e[i];
      }
    }
    catch (TypeError){
    }
    capitalWords.push(cap);
  }
  displayText = capitalWords;
}
makeSentence();

function renderText() {
  displayText.forEach(word => {
    let span = document.createElement('span');
    span.innerHTML = ' ' + word;
    DISP_ELEM.appendChild(span);
  });
  DISP_ELEM.firstChild.classList.add('highlight');
}
 
function setCount() {
  whitespaceCount++;
}

var oldDate; 
var newDate;
var goodWords = [];
var badWords = [];

function renderResults() { 
  var wpm = 0;
  var gwpm = 0;
  var acc = 0;
  var elapsed = (newDate - oldDate) / 1000;
  var good = 0;
  var bad = 0;
  for (var i = 0; i < goodWords.length; i++){
    good += goodWords[i].length;
  }
  for (var i = 0; i < badWords.length; i++){
    bad += badWords[i].length;
  }
  if (mode == 'timed'){
    if (timeLimit == 60) {
      // possibly get rid of this and just use the elapsed method so no more cases required
      wpm = (((good) / 5) / 1);
      gwpm = ((good + bad) / 5 / 1);
    }
    else if (timeLimit == 30){
      wpm = (((good) / 5) / 0.5);;
      gwpm = ((good + bad) / 5 / 0.5);
    }
    else{
      wpm = (((good) / 5) / (1 / 6));
      gwpm = ((good + bad) / 5 / (1 / 6));
    }
  }
  else if (mode == 'burst' || mode == 'quote'){
    wpm = (((good) / 5) / (elapsed / 60));
    gwpm = ((good + bad) / 5 / (elapsed / 60));
  }
  acc = (good / (good + bad)) * 100;
  
  WPM_NUM_ELEM.innerHTML = (wpm + whitespaceCount).toFixed(0);
  
  GWPM_ELEM.innerHTML = (gwpm + whitespaceCount).toFixed(0) + ' gWPM';
  ACC_ELEM.innerHTML = acc.toFixed(1) + '% acc';
  CORR_ELEM.innerHTML = 'correct chars: ' + (good + whitespaceCount);
  INCORR_ELEM.innerHTML = 'incorrect chars: ' + bad;
}

var counter;
   function clock() {
     counter = setInterval(clockConditions, 1000);
     var c = timeLimit;
     function clockConditions() {
       if (c <= 10){
         TIME_ELEM.innerHTML = '0' + --c + 's';
       }
       else{
        TIME_ELEM.innerHTML = --c + 's';
       }
       if (c == 0) {
         clearInterval(counter);
         TIME_ELEM.innerHTML = '00s';
         INP_ELEM.disabled = true;
         renderResults();
       }
     }
   }
  
function stopClock(){
  clearInterval(counter);
}

var totalChar = 0;
var firstLetter = displayText[0][0];
mode = 'timed';

INP_ELEM.addEventListener('keydown', e => {
  totalChar++;
  if ((whitespaceCount == 0) && (totalChar == 1) && (mode == 'timed')) {
    clock();
  }  
  else if ((whitespaceCount == 0) && (totalChar == 1) && (mode == 'burst' || mode == 'quote')){
    oldDate = Date.now();
    console.log(oldDate);
  }
  var innerString = INP_ELEM.value;
  var totalString = DISP_ELEM.childNodes[whitespaceCount].innerText;
  try{
    var match = totalString.match(innerString);
  }
  catch(SyntaxError){
  }
  if (match == null) {
    DISP_ELEM.childNodes[whitespaceCount].classList.add('highlight-red');
  }
  else { 
    DISP_ELEM.childNodes[whitespaceCount].classList.remove('highlight-red');
  }
  if (e.key == ' ') {
    event.preventDefault();
    //  the timed version and the word limit version both need scroll like this 
    try{
      if (DISP_ELEM.childNodes[whitespaceCount + 1].offsetTop > DISP_ELEM.childNodes[whitespaceCount].offsetTop){
        // change if the max width of container is changing 
        if ((displayText.length - whitespaceCount) < 10){ 
        }
        else{
          var newOffset = DISP_ELEM.childNodes[whitespaceCount + 1].offsetTop - DISP_ELEM.childNodes[whitespaceCount].offsetTop;
          DISP_ELEM.scrollBy({
            top: newOffset,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    }
    catch (TypeError){  
    }
    if (INP_ELEM.value == '') {
      INP_ELEM.value = '';
    }
    else if (INP_ELEM.value != '') {
      try{
        DISP_ELEM.childNodes[whitespaceCount + 1].classList.add('highlight');
      }
      catch (TypeError){
      }
      if (INP_ELEM.value.trim() == displayText[whitespaceCount]){
        DISP_ELEM.childNodes[whitespaceCount].classList.remove('highlight-red');
        DISP_ELEM.childNodes[whitespaceCount].classList.remove('highlight');
        DISP_ELEM.childNodes[whitespaceCount].classList.add('correct');
        goodWords.push(displayText[whitespaceCount]);
      }
      else if (INP_ELEM.value.trim() != displayText[whitespaceCount]){
        DISP_ELEM.childNodes[whitespaceCount].classList.remove('highlight-red');
        DISP_ELEM.childNodes[whitespaceCount].classList.remove('highlight');
        DISP_ELEM.childNodes[whitespaceCount].classList.add('incorrect');
        badWords.push(displayText[whitespaceCount]);
      }
      INP_ELEM.value = '';
      setCount();
      if (whitespaceCount == displayText.length) {
        newDate = Date.now();
        INP_ELEM.disabled = true;
        renderResults();
        console.log(newDate);
      }
    }
  }
})

var lengthSelection;
document.getElementById('wordDropdown').classList.add('mask');
$('.dropdown').click(function () {
  // need to add a check here to that it focuses on thsi specifically 
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(250);
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(250);
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
$('.dropdown-menu li').click(function () {
  input = $(this).parents('.dropdown').find('input').val();
  if (input == 'burst' || input == 'timed' || input == 'quote' || input == 'infinite' ){
    mode = input; 
  }
  else if (input == '10' || input == '30' || input == '60'){
    time = input;
  }
  else if (input == '10 words' || input == '50 words' || input == '200 words'){
    lengthSelection = input;
  }
  stopClock();
  if (mode == 'burst' ){
    DISP_ELEM.classList.add('display-short');
    lengthLimit = 10;
    reset();
    TIME_ELEM.innerHTML = '///';
    document.getElementById('wordDropdown').classList.remove('mask');
    document.getElementById('switch').classList.remove('mask-button');
    document.getElementById('slider').classList.remove('mask-slider');
    document.getElementById('slider').classList.remove('mask-before');
    document.getElementById('timeDropdown').classList.add('mask');
    if (lengthSelection == '10 words'){
      lengthLimit = 10;
      reset();
    }
    else if (lengthSelection == '50 words'){
      lengthLimit = 50;
      reset();
    }
    else if (lengthSelection == '200 words'){
      lengthLimit = 200;
      reset();
    }
  }
  else if (mode == 'timed') {
    DISP_ELEM.classList.remove('display-short');
    document.getElementById('switch').classList.remove('mask-button');
    document.getElementById('slider').classList.remove('mask-slider');
    document.getElementById('slider').classList.remove('mask-before');
    document.getElementById('timeDropdown').classList.remove('mask');
    document.getElementById('wordDropdown').classList.add('mask');
    if (typeof time == 'undefined'){
      timeLimit = 60;
    }
    else{
      timeLimit = parseInt(time);
    }
    lengthLimit = 350;
    reset();
    TIME_ELEM.innerHTML = timeLimit + 's'
  }
  else if (mode == 'quote'){
    TIME_ELEM.innerHTML = '///';
    DISP_ELEM.classList.remove('display-short');
    document.getElementById('timeDropdown').classList.add('mask');
    document.getElementById('wordDropdown').classList.add('mask');
    document.getElementById('switch').classList.add('mask-button');
    document.getElementById('slider').classList.add('mask-slider');
    document.getElementById('slider').classList.add('mask-before');
    reset();
  }
  else if (mode == 'infinite'){
    lengthLimit = 100;
    console.log("got here");
    TIME_ELEM.innerHTML = '///';
    DISP_ELEM.classList.remove('display-short');

    document.getElementById('timeDropdown').classList.add('mask');
    document.getElementById('wordDropdown').classList.add('mask');
    document.getElementById('switch').classList.remove('mask-button');
    document.getElementById('slider').classList.remove('mask-slider');
    document.getElementById('slider').classList.remove('mask-before');
    reset();
  }
}); 


function reset(){
  stopClock();
  if (mode == 'burst' || mode == 'quote' || mode == 'infinite'){
    TIME_ELEM.innerHTML = '///';
  }
  else{
    TIME_ELEM.innerHTML = timeLimit + 's'
  } 
  displayText = '';
  whitespaceCount = 0;
  correctChar = 0;
  incorrectChar = 0;
  totalChar = 0;
  goodWords = [];
  badWords = [];
  INP_ELEM.disabled = false;
  INP_ELEM.value = '';
  DISP_ELEM.innerHTML = '';
  WPM_NUM_ELEM.innerHTML = '--';
  WPM_ELEM.innerHTML = 'WPM  ';
  GWPM_ELEM.innerHTML = '00 ' + 'gWPM';
  ACC_ELEM.innerHTML = '00.0% acc';
  CORR_ELEM.innerHTML = 'correct chars: 00';
  INCORR_ELEM.innerHTML = 'incorrect chars: 00';
 //add fade animation to replace text instead of this or figure out to make it scroll up 
  DISP_ELEM.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  if (flag == true){
    capWords(makeSentence()); 
  } 
  else {
    if (mode == 'quote'){
      selectQuote();
    }
    else if (mode == 'infinite'){
      infiniteWords();
    }
    else{
      makeSentence();
    }
  }
  renderText();
}

renderText();


