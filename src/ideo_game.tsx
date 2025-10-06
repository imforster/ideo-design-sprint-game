import React, { useState, useEffect } from 'react';
import { Lightbulb, Users, Target, Rocket, RefreshCw, Trophy, Clock, Sparkles, Plus, Download, Share2, Copy, Settings, X } from 'lucide-react';

const IDEOGame = () => {
  const [gameState, setGameState] = useState('intro');
  const [gameMode, setGameMode] = useState(null); // 'solo' or 'team'
  const [currentPhase, setCurrentPhase] = useState(0);
  const [challenge, setChallenge] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [ideas, setIdeas] = useState([]);
  const [selectedIdeas, setSelectedIdeas] = useState([]);
  const [prototype, setPrototype] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(180);
  const [timerActive, setTimerActive] = useState(false);
  const [timerDuration, setTimerDuration] = useState(180);
  const [showSettings, setShowSettings] = useState(false);
  const [showShare, setShowShare] = useState(false);
  
  // Team mode state
  const [teamName, setTeamName] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [hmwStatement, setHmwStatement] = useState('');
  const [iterationNotes, setIterationNotes] = useState('');
  
  // Custom challenges
  const [customChallenges, setCustomChallenges] = useState([]);
  const [showAddChallenge, setShowAddChallenge] = useState(false);
  const [newChallenge, setNewChallenge] = useState({
    title: '',
    description: '',
    persona: '',
    painPoint: '',
    topic: ''
  });
  const [enabledChallenges, setEnabledChallenges] = useState(new Set<string>());
  
  // Import/Export state
  const [importPreviewData, setImportPreviewData] = useState<any[]>([]);
  const [showImportPreview, setShowImportPreview] = useState(false);

  // Challenge JSON schema constant
  const CHALLENGE_SCHEMA_VERSION = '1.0';

  const TOPICS = [
    'Education',
    'Business',
    'Healthcare',
    'Technology',
    'Sustainability',
    'Social Impact',
    'Product Design',
    'Service Design',
    'Custom'
  ];

  const getTopicColor = (topic: string) => {
    const colors: Record<string, string> = {
      'Education': 'bg-blue-100 text-blue-800',
      'Business': 'bg-purple-100 text-purple-800',
      'Healthcare': 'bg-red-100 text-red-800',
      'Technology': 'bg-cyan-100 text-cyan-800',
      'Sustainability': 'bg-green-100 text-green-800',
      'Social Impact': 'bg-orange-100 text-orange-800',
      'Product Design': 'bg-pink-100 text-pink-800',
      'Service Design': 'bg-indigo-100 text-indigo-800',
      'Custom': 'bg-gray-100 text-gray-800'
    };
    return colors[topic] || 'bg-gray-100 text-gray-800';
  };

  const defaultChallenges = [
    {
      title: "Campus Coffee Crisis",
      description: "Students are falling asleep in afternoon classes. The campus coffee shop has long lines and limited seating.",
      persona: "Sarah, a sophomore juggling 18 credits and part-time work",
      painPoint: "Needs caffeine but can't afford to miss class waiting in line",
      topic: "Education"
    },
    {
      title: "Remote Team Disconnect",
      description: "A fully remote startup is struggling with team bonding and spontaneous collaboration.",
      persona: "Marcus, a new developer who's never met his teammates in person",
      painPoint: "Feels isolated and misses the energy of working alongside others",
      topic: "Business"
    },
    {
      title: "Sustainable Shopping Struggle",
      description: "Consumers want to shop sustainably but find it confusing and time-consuming to verify eco-friendly claims.",
      persona: "Elena, an environmentally conscious parent of two",
      painPoint: "Overwhelmed by greenwashing and conflicting information",
      topic: "Sustainability"
    },
    {
      title: "Fitness Motivation Gap",
      description: "Gym memberships go unused after the initial enthusiasm fades in a few weeks.",
      persona: "James, a 35-year-old professional with good intentions",
      painPoint: "Starts strong but loses motivation when results aren't immediate",
      topic: "Healthcare"
    }
  ];

  const allChallenges = [...defaultChallenges, ...customChallenges];

  // Initialize enabledChallenges with all challenges
  useEffect(() => {
    const allTitles = allChallenges.map(c => c.title);
    setEnabledChallenges(new Set(allTitles));
  }, [allChallenges.length]);

  const phases = [
    {
      name: "Empathize",
      icon: Users,
      color: "bg-blue-500",
      instruction: "Create a 'How Might We...' statement that reframes this challenge as an opportunity.",
      placeholder: "How might we help...",
      tip: "Focus on the human need, not the solution. Start with 'How might we help [persona] to [goal] so that [benefit]?'"
    },
    {
      name: "Ideate",
      icon: Lightbulb,
      color: "bg-yellow-500",
      instruction: "Generate wild ideas! No judgment, go for quantity!",
      placeholder: "Type an idea and press Enter...",
      tip: "Think: What would Apple do? What if budget was unlimited? What's the opposite of obvious?"
    },
    {
      name: "Select",
      icon: Target,
      color: "bg-green-500",
      instruction: "Choose your top 3 ideas based on: Desirability, Feasibility, and Innovation",
      tip: "Look for ideas that users want, you can build, and that feel fresh or unexpected."
    },
    {
      name: "Prototype",
      icon: Rocket,
      color: "bg-purple-500",
      instruction: "Describe a simple prototype for your best idea. How would you test it in 48 hours?",
      placeholder: "Our prototype is...",
      tip: "Keep it rough! Sketch, storyboard, or role-play. The goal is to learn, not to perfect."
    },
    {
      name: "Iterate",
      icon: RefreshCw,
      color: "bg-pink-500",
      instruction: "Reflect: What feedback would improve this? What's the smallest testable version?",
      placeholder: "I would improve this by...",
      tip: "Use: I like... I wish... What if... to refine your concept."
    }
  ];

  const addCustomChallenge = () => {
    try {
      // Validate all fields are filled
      if (!newChallenge.title || !newChallenge.title.trim()) {
        alert('Please enter a challenge title');
        return;
      }
      if (!newChallenge.description || !newChallenge.description.trim()) {
        alert('Please enter a challenge description');
        return;
      }
      if (!newChallenge.persona || !newChallenge.persona.trim()) {
        alert('Please enter a user persona');
        return;
      }
      if (!newChallenge.painPoint || !newChallenge.painPoint.trim()) {
        alert('Please enter a pain point');
        return;
      }
      if (!newChallenge.topic || !newChallenge.topic.trim()) {
        alert('Please select or enter a topic');
        return;
      }

      // Check for duplicate titles
      const isDuplicate = [...defaultChallenges, ...customChallenges].some(
        c => c.title.toLowerCase() === newChallenge.title.trim().toLowerCase()
      );
      
      if (isDuplicate) {
        alert('A challenge with this title already exists. Please use a different title.');
        return;
      }

      // Trim all fields
      const trimmedChallenge = {
        title: newChallenge.title.trim(),
        description: newChallenge.description.trim(),
        persona: newChallenge.persona.trim(),
        painPoint: newChallenge.painPoint.trim(),
        topic: newChallenge.topic.trim()
      };

      setCustomChallenges([...customChallenges, trimmedChallenge]);
      
      // Enable the new challenge by default
      const newEnabled = new Set(enabledChallenges);
      newEnabled.add(trimmedChallenge.title);
      setEnabledChallenges(newEnabled);
      
      setNewChallenge({ title: '', description: '', persona: '', painPoint: '', topic: '' });
      setShowAddChallenge(false);
    } catch (error) {
      console.error('Error adding custom challenge:', error);
      alert('Failed to add challenge. Please try again.');
    }
  };

  const exportChallenges = () => {
    try {
      if (!customChallenges || customChallenges.length === 0) {
        alert('No custom challenges to export. Please add some challenges first.');
        return;
      }

      const exportData = {
        version: CHALLENGE_SCHEMA_VERSION,
        exportDate: new Date().toISOString(),
        challenges: customChallenges
      };

      const jsonString = JSON.stringify(exportData, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const timestamp = new Date().toISOString().split('T')[0];
      a.download = `ideo-challenges-${timestamp}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting challenges:', error);
      alert('Failed to export challenges. Please try again or check your browser settings.');
    }
  };

  const validateChallengeJSON = (data) => {
    // Check if data is an object
    if (!data || typeof data !== 'object') {
      return { valid: false, error: 'Invalid JSON structure' };
    }

    // Check for version field
    if (!data.version || data.version !== CHALLENGE_SCHEMA_VERSION) {
      return { valid: false, error: `Invalid or missing version. Expected version ${CHALLENGE_SCHEMA_VERSION}` };
    }

    // Check for challenges array
    if (!Array.isArray(data.challenges)) {
      return { valid: false, error: 'Missing or invalid challenges array' };
    }

    // Check if there's at least one challenge
    if (data.challenges.length === 0) {
      return { valid: false, error: 'No challenges found in the file' };
    }

    // Validate each challenge has required fields
    const requiredFields = ['title', 'description', 'persona', 'painPoint', 'topic'];
    const missingFields: string[] = [];

    for (let i = 0; i < data.challenges.length; i++) {
      const challenge = data.challenges[i];
      
      for (const field of requiredFields) {
        if (!challenge[field] || typeof challenge[field] !== 'string' || challenge[field].trim() === '') {
          missingFields.push(`Challenge ${i + 1}: missing or invalid "${field}"`);
        }
      }
    }

    if (missingFields.length > 0) {
      return { 
        valid: false, 
        error: `Some challenges are missing required fields:\n${missingFields.join('\n')}` 
      };
    }

    return { valid: true };
  };

  const handleImportFile = (event: any) => {
    try {
      const file = event.target.files[0];
      if (!file) return;

      // Validate file type
      if (!file.name.endsWith('.json')) {
        alert('Please select a valid JSON file (.json extension required).');
        event.target.value = '';
        return;
      }

      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        alert('File is too large. Please select a file smaller than 5MB.');
        event.target.value = '';
        return;
      }

      const reader = new FileReader();
      
      reader.onerror = () => {
        alert('Failed to read file. Please try again or select a different file.');
        event.target.value = '';
      };

      reader.onload = (e: any) => {
        try {
          const result = e.target?.result;
          if (!result || typeof result !== 'string') {
            throw new Error('Invalid file content');
          }

          const jsonData = JSON.parse(result);
          const validationResult = validateChallengeJSON(jsonData);
          
          if (validationResult.valid) {
            setImportPreviewData(jsonData.challenges);
            setShowImportPreview(true);
          } else {
            alert(`Invalid JSON file: ${validationResult.error}`);
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
          if (error instanceof SyntaxError) {
            alert('Invalid JSON format. Please check that your file contains valid JSON data.');
          } else {
            alert('Failed to process file. Please check the file format and try again.');
          }
        }
      };
      
      reader.readAsText(file);
      
      // Reset the input so the same file can be selected again
      event.target.value = '';
    } catch (error) {
      console.error('Error handling file import:', error);
      alert('An unexpected error occurred while importing. Please try again.');
      if (event.target) {
        event.target.value = '';
      }
    }
  };

  const confirmImport = () => {
    try {
      if (!importPreviewData || importPreviewData.length === 0) {
        alert('No challenges to import.');
        return;
      }

      // Filter out duplicates based on title matching (case-insensitive)
      const existingTitles = customChallenges.map(c => c.title.toLowerCase());
      const newChallenges = importPreviewData.filter(
        challenge => challenge && challenge.title && !existingTitles.includes(challenge.title.toLowerCase())
      );
      
      const skippedCount = importPreviewData.length - newChallenges.length;
      
      // Merge new challenges into customChallenges
      setCustomChallenges([...customChallenges, ...newChallenges]);
      
      // Enable all imported challenges by default
      const newEnabled = new Set(enabledChallenges);
      newChallenges.forEach(challenge => {
        if (challenge && challenge.title) {
          newEnabled.add(challenge.title);
        }
      });
      setEnabledChallenges(newEnabled);
      
      // Display success message
      let message = `Successfully imported ${newChallenges.length} challenge${newChallenges.length !== 1 ? 's' : ''}`;
      if (skippedCount > 0) {
        message += `\n${skippedCount} duplicate${skippedCount !== 1 ? 's' : ''} skipped`;
      }
      alert(message);
      
      // Clear import preview data
      setImportPreviewData([]);
    } catch (error) {
      console.error('Error confirming import:', error);
      alert('Failed to import challenges. Please try again.');
      setImportPreviewData([]);
    }
  };

  const toggleChallengeEnabled = (title: string) => {
    const newEnabled = new Set(enabledChallenges);
    if (newEnabled.has(title)) {
      newEnabled.delete(title);
    } else {
      newEnabled.add(title);
    }
    setEnabledChallenges(newEnabled);
  };

  const selectAllChallenges = () => {
    const allTitles = allChallenges.map(c => c.title);
    setEnabledChallenges(new Set(allTitles));
  };

  const deselectAllChallenges = () => {
    setEnabledChallenges(new Set());
  };

  const getEnabledChallenges = () => {
    return allChallenges.filter(c => enabledChallenges.has(c.title));
  };

  const startGame = (mode: string | null) => {
    try {
      // Validate mode
      if (!mode) {
        alert('Please select a game mode (Solo or Team)');
        return;
      }

      // Validate team setup
      if (mode === 'team') {
        if (!teamName || !teamName.trim()) {
          alert('Please enter a team name');
          return;
        }
        if (teamMembers.length === 0) {
          alert('Please add at least one team member');
          return;
        }
      }

      // Validate challenges
      const enabled = getEnabledChallenges();
      if (enabled.length === 0) {
        alert('Please enable at least one challenge in settings before starting');
        return;
      }

      // Select random challenge
      const randomChallenge = enabled[Math.floor(Math.random() * enabled.length)];
      if (!randomChallenge) {
        alert('Failed to select a challenge. Please try again.');
        return;
      }

      // Initialize game state
      setChallenge(randomChallenge);
      setGameMode(mode);
      setGameState('playing');
      setCurrentPhase(0);
      setIdeas([]);
      setSelectedIdeas([]);
      setPrototype(null);
      setHmwStatement('');
      setIterationNotes('');
      setScore(0);
      setTimer(timerDuration);
    } catch (error) {
      console.error('Error starting game:', error);
      alert('Failed to start game. Please refresh the page and try again.');
    }
  };

  const handleSubmit = () => {
    try {
      // Validate input exists
      if (!userInput || typeof userInput !== 'string') {
        alert('Please enter some text before submitting');
        return;
      }

      if (currentPhase === 0) {
        // Empathize phase - HMW statement
        const trimmedInput = userInput.trim();
        if (!trimmedInput) {
          alert('Please enter a "How Might We" statement');
          return;
        }
        if (trimmedInput.length < 10) {
          alert('Please provide a more detailed "How Might We" statement');
          return;
        }
        if (trimmedInput.toLowerCase().includes('how might we')) {
          setHmwStatement(trimmedInput);
          setScore(score + 20);
          setUserInput('');
          nextPhase();
        } else {
          alert("Try starting with 'How might we...'");
        }
      } else if (currentPhase === 1) {
        // Ideate phase - ideas
        const trimmedInput = userInput.trim();
        if (trimmedInput) {
          if (trimmedInput.length < 3) {
            alert('Please provide a more detailed idea');
            return;
          }
          const newIdea = gameMode === 'team' && playerName 
            ? `${trimmedInput} [by ${playerName}]`
            : trimmedInput;
          setIdeas([...ideas, newIdea]);
          setScore(score + 5);
          setUserInput('');
        }
      } else if (currentPhase === 3) {
        // Prototype phase
        const trimmedInput = userInput.trim();
        if (!trimmedInput) {
          alert('Please describe your prototype');
          return;
        }
        if (trimmedInput.length < 20) {
          alert("Describe your prototype in more detail! (At least 20 characters)");
          return;
        }
        setPrototype(trimmedInput);
        setScore(score + 30);
        setUserInput('');
        nextPhase();
      } else if (currentPhase === 4) {
        // Iterate phase
        const trimmedInput = userInput.trim();
        if (!trimmedInput) {
          alert('Please share your iteration thoughts');
          return;
        }
        if (trimmedInput.length < 15) {
          alert("Share more thoughts on how to improve! (At least 15 characters)");
          return;
        }
        setIterationNotes(trimmedInput);
        setScore(score + 25);
        setGameState('complete');
      }
    } catch (error) {
      console.error('Error handling submit:', error);
      alert('An error occurred while submitting. Please try again.');
    }
  };

  const nextPhase = () => {
    if (currentPhase === 1 && ideas.length >= 5) {
      setCurrentPhase(2);
      setTimerActive(false);
    } else if (currentPhase === 2 && selectedIdeas.length === 3) {
      setCurrentPhase(3);
    } else if (currentPhase < phases.length - 1) {
      setCurrentPhase(currentPhase + 1);
    }
  };

  const toggleIdeaSelection = (idea) => {
    try {
      if (!idea) {
        return;
      }

      if (selectedIdeas.includes(idea)) {
        setSelectedIdeas(selectedIdeas.filter(i => i !== idea));
      } else if (selectedIdeas.length < 3) {
        setSelectedIdeas([...selectedIdeas, idea]);
        if (selectedIdeas.length === 2) {
          setScore(score + 20);
        }
      } else {
        alert('You can only select 3 ideas. Please deselect one first.');
      }
    } catch (error) {
      console.error('Error toggling idea selection:', error);
      alert('Failed to select idea. Please try again.');
    }
  };

  const startTimer = () => {
    setTimerActive(true);
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimerActive(false);
          if (ideas.length >= 5) {
            nextPhase();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const addTeamMember = () => {
    try {
      const trimmedName = playerName.trim();
      
      if (!trimmedName) {
        alert('Please enter a team member name');
        return;
      }

      if (trimmedName.length < 2) {
        alert('Please enter a valid name (at least 2 characters)');
        return;
      }

      if (trimmedName.length > 50) {
        alert('Name is too long (maximum 50 characters)');
        return;
      }

      if (teamMembers.includes(trimmedName)) {
        alert('This team member has already been added');
        return;
      }

      if (teamMembers.length >= 20) {
        alert('Maximum 20 team members allowed');
        return;
      }

      setTeamMembers([...teamMembers, trimmedName]);
      setPlayerName('');
    } catch (error) {
      console.error('Error adding team member:', error);
      alert('Failed to add team member. Please try again.');
    }
  };

  const removeTeamMember = (member) => {
    setTeamMembers(teamMembers.filter(m => m !== member));
  };

  const generateShareableResults = () => {
    const results = {
      teamName: gameMode === 'team' ? teamName : 'Solo Player',
      challenge: challenge.title,
      date: new Date().toLocaleDateString(),
      score: score,
      hmwStatement: hmwStatement,
      ideasCount: ideas.length,
      topIdeas: selectedIdeas,
      prototype: prototype,
      iterationNotes: iterationNotes,
      teamMembers: gameMode === 'team' ? teamMembers : []
    };
    return results;
  };

  const downloadResults = () => {
    try {
      if (!challenge) {
        alert('No results to download. Please complete a design sprint first.');
        return;
      }

      const results = generateShareableResults();
      const content = `
IDEO DESIGN SPRINT RESULTS
========================

${gameMode === 'team' ? `Team: ${teamName}` : 'Solo Sprint'}
${gameMode === 'team' ? `Members: ${teamMembers.join(', ')}` : ''}
Challenge: ${challenge.title}
Date: ${results.date}
Score: ${score} points

HOW MIGHT WE STATEMENT
${hmwStatement}

IDEAS GENERATED (${ideas.length} total)
${ideas.map((idea, i) => `${i + 1}. ${idea}`).join('\n')}

TOP 3 SELECTED IDEAS
${selectedIdeas.map((idea, i) => `${i + 1}. ${idea}`).join('\n')}

PROTOTYPE
${prototype}

ITERATION & REFLECTION
${iterationNotes}

---
Generated by IDEO Design Sprint Game
    `.trim();

      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const filename = `design-sprint-${(teamName || 'solo').replace(/[^a-z0-9]/gi, '-')}-${Date.now()}.txt`;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading results:', error);
      alert('Failed to download results. Please try copying to clipboard instead.');
    }
  };

  const copyToClipboard = () => {
    try {
      if (!challenge) {
        alert('No results to copy. Please complete a design sprint first.');
        return;
      }

      const results = generateShareableResults();
      const text = `🎨 IDEO Design Sprint Results

${gameMode === 'team' ? `👥 Team: ${teamName}` : '🧑 Solo Sprint'}
🎯 Challenge: ${challenge.title}
⭐ Score: ${score} points
💡 Ideas Generated: ${ideas.length}

Top Concept: ${selectedIdeas[0] || 'N/A'}

Play your own Design Sprint: [Your URL Here]`;
      
      if (!navigator.clipboard) {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          alert('Results copied to clipboard!');
        } catch (err) {
          alert('Failed to copy to clipboard. Please try downloading results instead.');
        }
        document.body.removeChild(textArea);
        return;
      }

      navigator.clipboard.writeText(text).then(() => {
        alert('Results copied to clipboard!');
      }).catch((error) => {
        console.error('Error copying to clipboard:', error);
        alert('Failed to copy to clipboard. Please try downloading results instead.');
      });
    } catch (error) {
      console.error('Error in copyToClipboard:', error);
      alert('Failed to copy to clipboard. Please try downloading results instead.');
    }
  };

  // Intro Screen
  if (gameState === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="flex justify-between items-start mb-8">
              <div className="text-center flex-1">
                <Sparkles className="w-20 h-20 mx-auto mb-4 text-yellow-500" />
                <h1 className="text-5xl font-bold mb-4 text-gray-800">IDEO Design Sprint</h1>
                <p className="text-xl text-gray-600">Learn Design Thinking Through Play</p>
              </div>
              <button
                onClick={() => setShowSettings(true)}
                className="p-3 hover:bg-gray-100 rounded-lg transition-all"
              >
                <Settings className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Game Mode Selection */}
            {!gameMode ? (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div 
                  onClick={() => setGameMode('solo')}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl cursor-pointer hover:shadow-lg transition-all border-2 border-blue-200 hover:border-blue-400"
                >
                  <div className="text-center">
                    <Users className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                    <h3 className="font-bold text-2xl mb-3 text-blue-800">Solo Mode</h3>
                    <p className="text-gray-700">Practice design thinking on your own</p>
                  </div>
                </div>

                <div 
                  onClick={() => setGameMode('team')}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl cursor-pointer hover:shadow-lg transition-all border-2 border-purple-200 hover:border-purple-400"
                >
                  <div className="text-center">
                    <Users className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                    <h3 className="font-bold text-2xl mb-3 text-purple-800">Team Mode</h3>
                    <p className="text-gray-700">Collaborate with your team in real-time</p>
                  </div>
                </div>
              </div>
            ) : null}

            {/* Team Setup */}
            {gameMode === 'team' && (
              <div className="bg-purple-50 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-xl mb-4 text-purple-800">Team Setup</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Team Name</label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="e.g., Innovation Squad"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Add Team Members</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addTeamMember()}
                      placeholder="Enter name"
                      className="flex-1 p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                    />
                    <button
                      onClick={addTeamMember}
                      className="bg-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-600 transition-all"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {teamMembers.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {teamMembers.map((member, idx) => (
                      <div key={idx} className="bg-white px-4 py-2 rounded-full flex items-center gap-2 border-2 border-purple-200">
                        <span className="text-gray-700">{member}</span>
                        <button
                          onClick={() => removeTeamMember(member)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {gameMode === 'solo' && (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3 text-blue-800">How to Play</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Receive a real-world design challenge</li>
                    <li>• Work through 5 IDEO design phases</li>
                    <li>• Generate ideas, select the best, prototype</li>
                    <li>• Earn points for creative thinking</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3 text-purple-800">IDEO Principles</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✨ Defer judgment - wild ideas welcome</li>
                    <li>🤝 Build on others' ideas</li>
                    <li>🎯 Stay focused on the topic</li>
                    <li>📊 Go for quantity over quality</li>
                  </ul>
                </div>
              </div>
            )}

            <div className="flex gap-4 justify-center mb-6">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">15-20 min</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                <Trophy className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">100+ points possible</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                <Target className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">{allChallenges.length} challenges</span>
              </div>
            </div>

            {enabledChallenges.size === 0 && (
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-4">
                <p className="text-yellow-800 font-semibold">⚠️ No challenges enabled</p>
                <p className="text-yellow-700 text-sm">Please enable at least one challenge in settings before starting.</p>
              </div>
            )}

            <div className="flex gap-4">
              {gameMode && (
                <button
                  onClick={() => setGameMode(null)}
                  className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl text-xl font-bold hover:bg-gray-300 transition-all"
                >
                  ← Back
                </button>
              )}
              <button
                onClick={() => startGame(gameMode)}
                disabled={!gameMode || enabledChallenges.size === 0}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl text-xl font-bold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Start Design Sprint →
              </button>
            </div>
          </div>
        </div>

        {/* Settings Modal */}
        {showSettings && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Facilitator Settings</h2>
                <button onClick={() => setShowSettings(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg text-gray-800">Custom Challenges</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowAddChallenge(true)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition-all flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add Challenge
                    </button>
                    <label className="bg-purple-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-purple-600 transition-all flex items-center gap-2 cursor-pointer">
                      <Download className="w-4 h-4" />
                      Import Challenges
                      <input
                        type="file"
                        accept=".json"
                        onChange={handleImportFile}
                        className="hidden"
                      />
                    </label>
                    {customChallenges.length > 0 && (
                      <button
                        onClick={exportChallenges}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-all flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Export Challenges
                      </button>
                    )}
                  </div>
                </div>

                {showAddChallenge && (
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <input
                      type="text"
                      placeholder="Challenge Title"
                      value={newChallenge.title}
                      onChange={(e) => setNewChallenge({...newChallenge, title: e.target.value})}
                      className="w-full p-2 border rounded mb-2"
                    />
                    <textarea
                      placeholder="Challenge Description"
                      value={newChallenge.description}
                      onChange={(e) => setNewChallenge({...newChallenge, description: e.target.value})}
                      className="w-full p-2 border rounded mb-2"
                      rows={2}
                    />
                    <input
                      type="text"
                      placeholder="User Persona"
                      value={newChallenge.persona}
                      onChange={(e) => setNewChallenge({...newChallenge, persona: e.target.value})}
                      className="w-full p-2 border rounded mb-2"
                    />
                    <input
                      type="text"
                      placeholder="Pain Point"
                      value={newChallenge.painPoint}
                      onChange={(e) => setNewChallenge({...newChallenge, painPoint: e.target.value})}
                      className="w-full p-2 border rounded mb-2"
                    />
                    <select
                      value={newChallenge.topic === 'Custom' || !TOPICS.includes(newChallenge.topic) ? 'Custom' : newChallenge.topic}
                      onChange={(e) => setNewChallenge({...newChallenge, topic: e.target.value})}
                      className="w-full p-2 border rounded mb-2"
                    >
                      <option value="">Select Topic</option>
                      {TOPICS.map(topic => (
                        <option key={topic} value={topic}>{topic}</option>
                      ))}
                    </select>
                    {(newChallenge.topic === 'Custom' || (newChallenge.topic && !TOPICS.slice(0, -1).includes(newChallenge.topic))) && (
                      <input
                        type="text"
                        placeholder="Enter custom topic"
                        value={newChallenge.topic === 'Custom' ? '' : newChallenge.topic}
                        onChange={(e) => setNewChallenge({...newChallenge, topic: e.target.value})}
                        className="w-full p-2 border rounded mb-2"
                      />
                    )}
                    <div className="flex gap-2">
                      <button
                        onClick={addCustomChallenge}
                        className="bg-green-500 text-white px-4 py-2 rounded font-bold hover:bg-green-600"
                      >
                        Save Challenge
                      </button>
                      <button
                        onClick={() => setShowAddChallenge(false)}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded font-bold hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <p className="text-sm text-gray-600 mb-2">{defaultChallenges.length} default challenges</p>
                  {customChallenges.length > 0 ? (
                    customChallenges.map((c, idx) => (
                      <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="font-semibold text-gray-800">{c.title}</div>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTopicColor(c.topic)}`}>
                            {c.topic}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">{c.description}</div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 italic">No custom challenges yet</p>
                  )}
                </div>
              </div>

              <div className="mb-6 border-t pt-6">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Challenge Selection</h3>
                <p className="text-sm text-gray-600 mb-4">Select which challenges will be available when starting a sprint</p>
                
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={selectAllChallenges}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-all"
                  >
                    Select All
                  </button>
                  <button
                    onClick={deselectAllChallenges}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-400 transition-all"
                  >
                    Deselect All
                  </button>
                </div>

                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {allChallenges.map((challenge, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                      <input
                        type="checkbox"
                        checked={enabledChallenges.has(challenge.title)}
                        onChange={() => toggleChallengeEnabled(challenge.title)}
                        className="w-4 h-4"
                      />
                      <div className="flex-1">
                        <span className="text-gray-800">{challenge.title}</span>
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${getTopicColor(challenge.topic)}`}>
                          {challenge.topic}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Import Preview Modal */}
        {showImportPreview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Import Challenges Preview</h2>
                <button onClick={() => setShowImportPreview(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-6">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-blue-800 font-semibold">
                    {importPreviewData.length} challenge{importPreviewData.length !== 1 ? 's' : ''} found
                  </p>
                </div>

                <h3 className="font-bold text-lg text-gray-800 mb-3">Challenges to Import:</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {importPreviewData.map((challenge, idx) => {
                    const isDuplicate = customChallenges.some(c => 
                      c.title.toLowerCase() === challenge.title.toLowerCase()
                    );
                    
                    return (
                      <div 
                        key={idx} 
                        className={`p-3 rounded-lg border-2 ${
                          isDuplicate 
                            ? 'bg-yellow-50 border-yellow-300' 
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <div className="font-semibold text-gray-800">{challenge.title}</div>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTopicColor(challenge.topic)}`}>
                            {challenge.topic}
                          </span>
                          {isDuplicate && (
                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-200 text-yellow-800">
                              Duplicate - Will Skip
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">{challenge.description}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowImportPreview(false)}
                  className="flex-1 bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-400 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    confirmImport();
                    setShowImportPreview(false);
                  }}
                  className="flex-1 bg-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-600 transition-all"
                >
                  Import All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Complete Screen
  if (gameState === 'complete') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="text-center mb-8">
              <Trophy className="w-24 h-24 mx-auto mb-6 text-yellow-500" />
              <h1 className="text-4xl font-bold mb-4 text-gray-800">Design Sprint Complete!</h1>
              {gameMode === 'team' && (
                <div className="text-2xl font-bold text-purple-600 mb-2">Team: {teamName}</div>
              )}
              <div className="text-6xl font-bold text-purple-600 mb-6">{score} points</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-bold text-xl mb-4 text-gray-800">Your Design Journey</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Challenge:</strong> {challenge.title}
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${getTopicColor(challenge.topic)}`}>
                      {challenge.topic}
                    </span>
                  </p>
                </div>
                {gameMode === 'team' && teamMembers.length > 0 && (
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700"><strong>Team Members:</strong> {teamMembers.join(', ')}</p>
                  </div>
                )}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>How Might We:</strong></p>
                  <p className="text-gray-800 mt-1">{hmwStatement}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Ideas Generated:</strong> {ideas.length}</p>
                  <div className="mt-2 space-y-1">
                    {ideas.slice(0, 5).map((idea, idx) => (
                      <p key={idx} className="text-sm text-gray-600">• {idea}</p>
                    ))}
                    {ideas.length > 5 && <p className="text-sm text-gray-500 italic">...and {ideas.length - 5} more</p>}
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Top 3 Concepts:</strong></p>
                  <div className="mt-2 space-y-1">
                    {selectedIdeas.map((idea, idx) => (
                      <p key={idx} className="text-sm text-gray-800">🏆 {idea}</p>
                    ))}
                  </div>
                </div>
                {prototype && (
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <strong className="text-purple-800">Your Prototype:</strong>
                    <p className="text-gray-700 mt-2">{prototype}</p>
                  </div>
                )}
                {iterationNotes && (
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <strong className="text-pink-800">Iteration Notes:</strong>
                    <p className="text-gray-700 mt-2">{iterationNotes}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4 justify-center mb-6">
              <button
                onClick={downloadResults}
                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Results
              </button>
              <button
                onClick={copyToClipboard}
                className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-all flex items-center gap-2"
              >
                <Copy className="w-5 h-5" />
                Copy to Clipboard
              </button>
              <button
                onClick={() => setShowShare(true)}
                className="bg-purple-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-600 transition-all flex items-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => startGame(gameMode)}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                Try New Challenge
              </button>
              <button
                onClick={() => {
                  setGameState('intro');
                  setGameMode(null);
                }}
                className="bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-300 transition-all"
              >
                Back to Start
              </button>
            </div>
          </div>
        </div>

        {/* Share Modal */}
        {showShare && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Share Results</h2>
                <button onClick={() => setShowShare(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">Your design sprint results are ready to share!</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Summary:</p>
                  <p className="text-sm text-gray-600">
                    {gameMode === 'team' ? `Team ${teamName}` : 'Solo sprint'} completed "{challenge.title}" 
                    with {ideas.length} ideas and scored {score} points!
                  </p>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-all"
                >
                  Copy Summary to Share
                </button>
                <button
                  onClick={downloadResults}
                  className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-all"
                >
                  Download Full Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Playing Screen
  const PhaseIcon = phases[currentPhase].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-gray-800">{challenge.title}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTopicColor(challenge.topic)}`}>
                  {challenge.topic}
                </span>
                {gameMode === 'team' && (
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Team: {teamName}
                  </span>
                )}
              </div>
              <p className="text-gray-600">{challenge.description}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-purple-600">{score}</div>
              <div className="text-sm text-gray-500">points</div>
            </div>
          </div>
          {gameMode === 'team' && teamMembers.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {teamMembers.map((member, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {member}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-between mb-4">
            {phases.map((phase, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  idx === currentPhase ? phase.color : idx < currentPhase ? 'bg-green-500' : 'bg-gray-200'
                } text-white mb-2 transition-all`}>
                  <phase.icon className="w-6 h-6" />
                </div>
                <div className={`text-xs font-medium ${idx === currentPhase ? 'text-gray-800' : 'text-gray-400'}`}>
                  {phase.name}
                </div>
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
              style={{ width: `${(currentPhase / (phases.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Game Area */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Panel - Context */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Design Brief</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-blue-800 mb-1">User Persona</div>
                <p className="text-sm text-gray-700">{challenge.persona}</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="font-semibold text-red-800 mb-1">Pain Point</div>
                <p className="text-sm text-gray-700">{challenge.painPoint}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="font-semibold text-yellow-800 mb-1">💡 Tip</div>
                <p className="text-sm text-gray-700">{phases[currentPhase].tip}</p>
              </div>
              {gameMode === 'team' && currentPhase === 1 && (
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-semibold text-purple-800 mb-2">Team Contribution</div>
                  <select
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="w-full p-2 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                  >
                    <option value="">Who's contributing?</option>
                    {teamMembers.map((member, idx) => (
                      <option key={idx} value={member}>{member}</option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-600 mt-2">Select your name before adding ideas</p>
                </div>
              )}
            </div>
          </div>

          {/* Center Panel - Main Interaction */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-lg ${phases[currentPhase].color}`}>
                <PhaseIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-gray-800">{phases[currentPhase].name}</h3>
                <p className="text-gray-600">{phases[currentPhase].instruction}</p>
              </div>
            </div>

            {/* Phase-specific content */}
            {currentPhase === 0 && (
              <div>
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                  placeholder={phases[currentPhase].placeholder}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:border-blue-500 focus:outline-none"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition-all"
                >
                  Submit HMW Statement
                </button>
              </div>
            )}

            {currentPhase === 1 && (
              <div>
                {!timerActive && ideas.length === 0 && (
                  <button
                    onClick={startTimer}
                    className="w-full bg-yellow-500 text-white py-4 rounded-lg font-bold mb-4 hover:bg-yellow-600 transition-all"
                  >
                    Start Idea Generation! 🚀
                  </button>
                )}
                
                {timerActive && (
                  <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 mb-4 text-center">
                    <div className="text-4xl font-bold text-red-600">{Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</div>
                    <div className="text-sm text-gray-600">Ideas: {ideas.length} | Target: 10+</div>
                  </div>
                )}

                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                  placeholder={phases[currentPhase].placeholder}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:border-yellow-500 focus:outline-none"
                  disabled={!timerActive && ideas.length === 0}
                />

                <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
                  {ideas.map((idea, idx) => (
                    <div key={idx} className="bg-yellow-50 p-3 rounded-lg flex items-center gap-2">
                      <div className="bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div className="text-gray-700 flex-1">{idea}</div>
                    </div>
                  ))}
                </div>

                {ideas.length >= 5 && (
                  <button
                    onClick={nextPhase}
                    className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-all"
                  >
                    Continue to Selection ({ideas.length} ideas) →
                  </button>
                )}
              </div>
            )}

            {currentPhase === 2 && (
              <div>
                <p className="text-gray-600 mb-4">Click on 3 ideas to select them for prototyping:</p>
                <div className="space-y-2 mb-4 max-h-96 overflow-y-auto">
                  {ideas.map((idea, idx) => (
                    <div
                      key={idx}
                      onClick={() => toggleIdeaSelection(idea)}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        selectedIdeas.includes(idea)
                          ? 'bg-green-500 text-white border-2 border-green-600'
                          : 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          selectedIdeas.includes(idea) ? 'bg-white text-green-500' : 'bg-gray-300 text-gray-600'
                        }`}>
                          {selectedIdeas.includes(idea) ? '✓' : idx + 1}
                        </div>
                        <div className="flex-1">{idea}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedIdeas.length === 3 && (
                  <button
                    onClick={nextPhase}
                    className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-all"
                  >
                    Prototype Top Idea →
                  </button>
                )}
                
                <div className="mt-4 text-center text-sm text-gray-500">
                  Selected: {selectedIdeas.length}/3
                </div>
              </div>
            )}

            {currentPhase === 3 && (
              <div>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <div className="font-bold text-purple-800 mb-2">Your Top Idea:</div>
                  <p className="text-gray-700">{selectedIdeas[0]}</p>
                </div>
                <textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder={phases[currentPhase].placeholder}
                  rows="6"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:border-purple-500 focus:outline-none"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-purple-500 text-white py-3 rounded-lg font-bold hover:bg-purple-600 transition-all"
                >
                  Submit Prototype
                </button>
              </div>
            )}

            {currentPhase === 4 && (
              <div>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <div className="font-bold text-purple-800 mb-2">Your Prototype:</div>
                  <p className="text-gray-700">{prototype}</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <div className="font-semibold text-pink-800 mb-2">Feedback Framework:</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✅ <strong>I like...</strong> What's working well?</li>
                    <li>🤔 <strong>I wish...</strong> What could be improved?</li>
                    <li>💭 <strong>What if...</strong> New possibilities?</li>
                  </ul>
                </div>
                <textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder={phases[currentPhase].placeholder}
                  rows="4"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:border-pink-500 focus:outline-none"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-pink-500 text-white py-3 rounded-lg font-bold hover:bg-pink-600 transition-all"
                >
                  Complete Design Sprint! 🎉
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDEOGame;