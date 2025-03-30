"use client";

import React, { useState, useEffect } from 'react';

interface CodeLine {
  number: number;
  content: React.ReactNode;
}

const DeveloperAnimation: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  
  const codeLines: CodeLine[] = [
    { number: 1, content: <span className="text-green-400">// Building something amazing</span> },
    { number: 2, content: <span><span className="text-blue-400">class</span> <span className="text-teal-300">DevelopmentJourney</span> {'{'}</span> },
    { number: 3, content: <span>&nbsp;&nbsp;<span className="text-blue-400">constructor</span>(<span className="text-blue-200">passion</span>: <span className="text-yellow-200">string</span>, <span className="text-blue-200">skills</span>: <span className="text-yellow-200">string[]</span>) {'{'}</span> },
    { number: 4, content: <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.<span className="text-blue-200">passion</span> = <span className="text-blue-200">passion</span>;</span> },
    { number: 5, content: <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.<span className="text-blue-200">skills</span> = <span className="text-blue-200">skills</span>;</span> },
    { number: 6, content: <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.<span className="text-blue-200">projects</span> = [];</span> },
    { number: 7, content: <span>&nbsp;&nbsp;{'}'}</span> },
    { number: 8, content: <span></span> },
    { number: 9, content: <span>&nbsp;&nbsp;<span className="text-yellow-200">createProject</span>(<span className="text-blue-200">idea</span>: <span className="text-yellow-200">string</span>): <span className="text-yellow-200">Project</span> {'{'}</span> },
    { number: 10, content: <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">const</span> <span className="text-blue-200">project</span> = <span className="text-blue-400">new</span> <span className="text-teal-300">Project</span>(<span className="text-blue-200">idea</span>);</span> },
    { number: 11, content: <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.<span className="text-blue-200">projects</span>.push(<span className="text-blue-200">project</span>);</span> },
    { number: 12, content: <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">return</span> <span className="text-blue-200">project</span>;</span> },
    { number: 13, content: <span>&nbsp;&nbsp;{'}'}</span> },
    { number: 14, content: <span></span> },
    { number: 15, content: <span>&nbsp;&nbsp;<span className="text-yellow-200">deployToProduction</span>(): <span className="text-yellow-200">void</span> {'{'}</span> },
    { number: 16, content: <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">// Launch the project to the world</span></span> },
    { number: 17, content: <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-200">project</span>.<span className="text-yellow-200">build</span>();</span> },
    { number: 18, content: <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-200">project</span>.<span className="text-yellow-200">test</span>();</span> },
    { number: 19, content: <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-200">project</span>.<span className="text-yellow-200">deploy</span>();</span> },
    { number: 20, content: <span>&nbsp;&nbsp;{'}'}</span> },
    { number: 21, content: <span>{'}'}</span> },
  ];
  
  useEffect(() => {
    if (isLoaded) return;
    
    codeLines.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index]);
      }, 300 + (index * 150));
    });
    
    setTimeout(() => {
      setIsLoaded(true);
    }, 300 + (codeLines.length * 150));
  }, [isLoaded]);
  
  return (
    <div className="relative h-96 md:h-128 lg:h-144 w-full overflow-hidden bg-gray-50 rounded-lg my-3">
      {/* Code Window */}
      <div className="absolute w-4/5 md:w-3/4 h-80 md:h-112 lg:h-128 bg-gray-900 rounded-md left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-xl">
        {/* Window Header */}
        <div className="bg-gray-800 h-6 flex items-center px-3">
          <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
          <div className="text-gray-400 text-xs ml-2 font-mono">main.tsx</div>
        </div>
        
        {/* Code Content */}
        <div className="p-4 text-white font-mono text-sm leading-relaxed h-full overflow-hidden">
          {codeLines.map((line, index) => (
            <div 
              key={line.number}
              className={`flex mb-1 transition-all duration-300 ${visibleLines.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            >
              <span className="text-gray-500 mr-4 w-6 text-right">{line.number}</span>
              <span>{line.content}</span>
              {index === codeLines.length - 1 && visibleLines.includes(index) && (
                <span className="inline-block w-2 h-4 bg-white ml-1 animate-pulse"></span>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating Elements - Added more elements to fill space */}
      <div className="absolute text-4xl text-red-500 font-mono left-4 top-1/4 animate-bounce opacity-70">{'{}'}</div>
      <div className="absolute text-3xl text-purple-500 font-mono left-10 top-3/4 animate-bounce opacity-70" style={{animationDelay: '0.5s'}}>{'()'}</div>
      
      <div className="absolute right-8 top-8 w-8 h-8 rounded-full border-4 border-blue-500 border-l-transparent animate-spin opacity-70"></div>
      <div className="absolute left-16 top-1/3 w-6 h-6 rounded-full border-4 border-yellow-500 border-t-transparent animate-spin opacity-70" style={{animationDuration: '3s'}}></div>
      
      <div className="absolute right-6 bottom-16 text-3xl text-green-500 font-mono animate-bounce opacity-70">&lt;/&gt;</div>
      <div className="absolute left-8 bottom-1/3 text-2xl text-blue-500 font-mono animate-bounce opacity-70" style={{animationDelay: '1s'}}>&lt;div&gt;</div>
      
      {/* Loading Bar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/5 h-1 bg-gray-300 rounded">
        <div 
          className="h-full bg-blue-500 rounded transition-all duration-1000 ease-in-out"
          style={{ width: isLoaded ? '100%' : '0%' }}
        ></div>
      </div>
    </div>
  );
};

export default DeveloperAnimation;
