// Screen harness for isolated screenshot capture at exact Figma dimensions
import { useParams } from 'react-router-dom'
import { Node34227_79155 } from './screens/Node34227_79155'
import { Node34227_78641 } from './screens/Node34227_78641'
import { Node34227_78843 } from './screens/Node34227_78843'
import { Node34227_78999 } from './screens/Node34227_78999'
import { Node34237_3169 } from './screens/Node34237_3169'
import { Node34227_79415 } from './screens/Node34227_79415'
import { Node34227_79234 } from './screens/Node34227_79234'
import { Node34227_79452 } from './screens/Node34227_79452'
import { Node34227_79473 } from './screens/Node34227_79473'
import { Node34233_2724 } from './screens/Node34233_2724'
import { Node34160_3830 } from './screens/Node34160_3830'
import { Node34237_2862 } from './screens/Node34237_2862'
import { Node34237_3007 } from './screens/Node34237_3007'
import { Node34227_79314 } from './screens/Node34227_79314'
import { Node34245_3118 } from './screens/Node34245_3118'
import { Node34227_79275 } from './screens/Node34227_79275'

// Map node IDs to components and true Figma frame dimensions (not export dimensions)
const SCREENS: Record<string, { Component: React.FC; width: number; height: number }> = {
  '34227-79155': { Component: Node34227_79155, width: 1728, height: 1211 },
  '34227-78641': { Component: Node34227_78641, width: 1728, height: 1198 },
  '34227-78843': { Component: Node34227_78843, width: 1728, height: 1088 },
  '34227-78999': { Component: Node34227_78999, width: 560, height: 1061 },
  '34237-3169': { Component: Node34237_3169, width: 560, height: 971 },
  '34227-79415': { Component: Node34227_79415, width: 1728, height: 1011 },
  '34227-79234': { Component: Node34227_79234, width: 1728, height: 803 },
  '34227-79452': { Component: Node34227_79452, width: 489, height: 308 },
  '34227-79473': { Component: Node34227_79473, width: 489, height: 755 },
  '34233-2724': { Component: Node34233_2724, width: 1600, height: 1204 },
  '34160-3830': { Component: Node34160_3830, width: 674, height: 1156 },
  '34237-2862': { Component: Node34237_2862, width: 560, height: 1061 },
  '34237-3007': { Component: Node34237_3007, width: 560, height: 1237 },
  '34227-79314': { Component: Node34227_79314, width: 1728, height: 1413 },
  '34245-3118': { Component: Node34245_3118, width: 1728, height: 1076 },
  '34227-79275': { Component: Node34227_79275, width: 1728, height: 1011 },
}

export function ScreenHarness() {
  const { id } = useParams<{ id: string }>()
  
  if (!id || !SCREENS[id]) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Screen not found: {id}</h1>
          <p className="text-gray-400 mb-2">Available screens:</p>
          <ul className="text-sm text-gray-500 space-y-1">
            {Object.keys(SCREENS).map((screenId) => (
              <li key={screenId}>
                <a href={`/link-insurance/screen/${screenId}`} className="hover:text-primary-400">
                  {screenId}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  const { Component, width, height } = SCREENS[id]

  return (
    <div 
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        overflow: 'hidden'
      }}
      data-screen-id={id}
      data-figma-width={width}
      data-figma-height={height}
    >
      <Component />
    </div>
  )
}
