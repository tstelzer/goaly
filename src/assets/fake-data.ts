import {Store} from 'app/store'

export const fakeData: Store = {
  model: {
    sets: {
      result: ['1', '2', '3', '4'],
      entities: {
        1: {
          id: '1',
          name: 'Crunches Medium',
          description: 'Different variations of stomach crunches.',
          repetitions: [
            '14',
            '15',
          ],
        },
        2: {
          id: '2',
          name: 'Warmup',
          description: 'Simple warmup set.',
          repetitions: ['16', '8', '17', '18'],
        },
        3: {
          id: '3',
          name: 'Dumbbell',
          description: '',
          repetitions: ['6', '9', '19'],
        },
        4: {
          id: '4',
          name: '',
          description: '',
          repetitions: [],
        },
      },
    },
    repetitions: {
      result: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '13',
        '12',
      ],
      entities: {
        1: {
          id: '1',
          name: 'Plank',
          description:
            `Get into a prone position on the floor, supporting your weight
            on your toes and your forearms. Your arms are bent and directly
            below the shoulder. Keep your body straight at all times, and
            hold this position as long as possible. To increase difficulty,
            an arm or leg can be raised.`,
          muscles: [1],
          level: 1,
          type: 2,
        },
        2: {
          id: '2',
          name: 'Hip circles (prone)',
          description:
            `Position yourself on your hands and knees on the ground.
            Maintaining good posture, raise one bent knee off of the ground.
            This will be your starting position. Keeping the knee in a bent
            position, rotate the femur in an arc, attempting to make a big
            circle with your knee. Perform this slowly for a number of
            repetitions, and repeat on the other side.`,
          muscles: [2],
          level: 1,
          type: 3,
        },
        3: {
          id: '3',
          name: 'Superman',
          description:
            `To begin, lie straight and face down on the floor or exercise
            mat. Your arms should be fully extended in front of you. This is
            the starting position. Simultaneously raise your arms, legs, and
            chest off of the floor and hold this contraction for 2 seconds.
            Tip: Squeeze your lower back to get the best results from this
            exercise. Remember to exhale during this movement. Note: When
            holding the contracted position, you should look like superman
            when he is flying. Slowly begin to lower your arms, legs and
            chest back down to the starting position while inhaling. Repeat
            for the recommended amount of repetitions prescribed in your
            program.`,
          muscles: [10],
          level: 1,
          type: 3,
        },
        4: {
          id: '4',
          name: 'Groiners',
          description:
            `Begin in a pushup position on the floor. This will be your
            starting position. Using both legs, jump forward landing with
            your feet next to your hands. Keep your head up as you do so.
            Return to the starting position and immediately repeat the
            movement, continuing for 10-20 repetitions.`,
          muscles: [3],
          level: 2,
          type: 3,
        },
        5: {
          id: '5',
          name: 'Dumbbell Goblet Squat',
          description:
            `From a standing position cradle the head of a dumbbell close to
            your chest with both hands. You should be looking straight
            forward, with your shoulders back, your spine straight, and your
            feet just outside of shoulder width. This will be your starting
            position. Initiate the movement by descending into a squat,
            flexing the hips and knees to lower your body. Maintain the angle
            of your torso, paying close attention to the preservation of your
            spine. As you descend, push your knees outward and keep your
            weight on your heels. Descend until you either reach the full
            squat position with your hamstrings on your calves or until your
            back starts to round. At the bottom of the motion pause briefly.
            Return to the starting position by driving through your heels,
            extending the knees and hips to return to the starting position.
            Repeat the movement for the desired number of repetitions.`,
          muscles: [13],
          level: 1,
          type: 2,
        },
        6: {
          id: '6',
          name: 'Hammer Curls',
          description:
            'Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso. The palms of the hands should be facing your torso. This will be your starting position. Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm. After the brief pause, inhale and slowly begin the lower the dumbbells back down to the starting position. Repeat for the recommended amount of repetitions.',
          muscles: [4],
          level: 1,
          type: 2,
        },
        7: {
          id: '7',
          name: 'Standing Dumbbell Calf Raise',
          description:
            'Stand with your torso upright holding two dumbbells in your hands by your sides. Place the ball of the foot on a sturdy and stable wooden board (that is around 2-3 inches tall) while your heels extend off and touch the floor. This will be your starting position. With the toes pointing either straight (to hit all parts equally), inwards (for emphasis on the outer head) or outwards (for emphasis on the inner head), raise the heels off the floor as you exhale by contracting the calves. Hold the top contraction for a second. As you inhale, go back to the starting position by slowly lowering the heels. Repeat for the recommended amount of times.',
          muscles: [5],
          level: 2,
          type: 2,
        },
        8: {
          id: '8',
          name: 'Pushups',
          description:
            'Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length. Next, lower yourself downward until your chest almost touches the floor as you inhale. Now breathe out and press your upper body back up to the starting position while squeezing your chest. After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed.',
          muscles: [16],
          level: 1,
          type: 2,
        },
        9: {
          id: '9',
          name: 'Side Laterals to Front Raise',
          description:
            'In a standing position, hold a pair of dumbbells at your side. This will be your starting position. Keeping your elbows slightly bent, raise the weights directly in front of you to shoulder height, avoiding any swinging or cheating. At the top of the exercise move the weights out in front of you, keeping your arms extended. Lower the weights with a controlled motion. On the next repetition, raise the weights in front of you to shoulder height before moving the weights laterally to your sides. Lower the weights to the starting position.',
          muscles: [14],
          level: 1,
          type: 2,
        },
        10: {
          id: '10',
          name: 'Bridge',
          description:
            'Lie flat on the floor on your back with the hands by your side and your knees bent. Your feet should be placed around shoulder width. This will be your starting position. Pushing mainly with your heels, lift your hips off the floor while keeping your back straight. Breathe out as you perform this part of the motion and hold at the top for a second. Slowly go back to the starting position as you breathe in.',
          muscles: [7],
          level: 1,
          type: 2,
        },
        11: {
          id: '11',
          name: 'Bench Dips',
          description:
            'For this exercise you will need to place a bench behind your back. With the bench perpendicular to your body, and while looking away from it, hold on to the bench on its edge with the hands fully extended, separated at shoulder width. The legs will be extended forward, bent at the waist and perpendicular to your torso. This will be your starting position. Slowly lower your body as you inhale by bending at the elbows until you lower yourself far enough to where there is an angle slightly smaller than 90 degrees between the upper arm and the forearm. Tip: Keep the elbows as close as possible throughout the movement. Forearms should always be pointing down. Using your triceps to bring your torso up again, lift yourself back to the starting position. Repeat for the recommended amount of repetitions.',
          muscles: [16],
          level: 1,
          type: 2,
        },
        12: {
          id: '12',
          name: 'Romanian Deadlift With Dumbbells',
          description:
            'Begin in a standing position with a dumbbell in each hand. Ensure that your back is straight and stays that way for the duration of the exercise. Allow your arms to hang perpendicular to the floor, with the wrists pronated and the elbows pointed to your sides. This will be your starting position. Initiate the movement by flexing your hips, slowly pushing your butt as far back as you can. This should entail a horizontal movement of the hips, rather than a downward movement. The knees should only partially bend, and your weight should remain on your heels. Drive your butt back as far as you can, which should generate tension in your hamstrings as your hands approach knee level. Maintain an arch in your back throughout the exercise. When your hips cannot perform any further backward movement, pause, and then slowly return to the starting position by extending the hips.',
          muscles: [8],
          level: 2,
          type: 2,
        },
        13: {
          id: '13',
          name: 'Dumbbell Lunges',
          description:
            'Stand with your torso upright holding two dumbbells in your hands by your sides. This will be your starting position. Step forward with your right leg around 2 feet or so from the foot being left stationary behind and lower your upper body down, while keeping the torso upright and maintaining balance. Inhale as you go down. Note: As in the other exercises, do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. Make sure that you keep your front shin perpendicular to the ground. Using mainly the heel of your foot, push up and go back to the starting position as you exhale. Repeat the movement for the recommended amount of repetitions and then perform with the left leg.',
          muscles: [13],
          level: 1,
          type: 2,
        },
        14: {
          id: '14',
          name: 'Bycycle Crunches',
          description: 'Lie flat on the floor with your lower back pressed to the ground. For this exercise, you will need to put your hands beside your head. Be careful however to not strain with the neck as you perform it. Now lift your shoulders into the crunch position. Bring knees up to where they are perpendicular to the floor, with your lower legs parallel to the floor. This will be your starting position. Now simultaneously, slowly go through a cycle pedal motion kicking forward with the right leg and bringing in the knee of the left leg. Bring your right elbow close to your left knee by crunching to the side, as you breathe out. Go back to the initial position as you breathe in. Crunch to the opposite side as you cycle your legs and bring closer your left elbow to your right knee and exhale. Continue alternating in this manner until all of the recommended repetitions for each side have been completed.',
          muscles: [1],
          level: 1,
          type: 2,
        },
        15: {
          id: '15',
          name: 'Crunches',
          description: 'Lie flat on your back with your feet flat on the ground, or resting on a bench with your knees bent at a 90 degree angle. If you are resting your feet on a bench, place them three to four inches apart and point your toes inward so they touch. Now place your hands lightly on either side of your head keeping your elbows in. Tip: Don\'t lock your fingers behind your head. While pushing the small of your back down in the floor to better isolate your abdominal muscles, begin to roll your shoulders off the floor. Continue to push down as hard as you can with your lower back as you contract your abdominals and exhale. Your shoulders should come up off the floor only about four inches, and your lower back should remain on the floor. At the top of the movement, contract your abdominals hard and keep the contraction for a second. Tip: Focus on slow, controlled movement - don\'t cheat yourself by using momentum. After the one second contraction, begin to come down slowly again to the starting position as you inhale. Repeat for the recommended amount of repetitions.',
          muscles: [1],
          level: 1,
          type: 2,
        },
        16: {
          id: '16',
          name: 'Jumping Jacks',
          description: 'Start by standing with your feet together. In one motion, jump your feet out to the side and raise your arms above your head. Immediately reverse the motion by jumping back to the starting position. Repeat for the recommended amount of repetitions.',
          muscles: [13],
          level: 1,
          type: 4,
        },
        17: {
          id: '17',
          name: 'Lunge',
          description: 'Stand erect with your feet hip-width apart, chest out, and shoulders back, maintaining the natural curvature of your spine. Your knees should be unlocked and your hand on your hips. This is your starting position. Take a moderate-length step forward with one foot, descending to a point in which your rear knee approaches the floor without touching, maintaining your body\'s upright posture. Your front knee should bend about 90 degrees, but for knee health it should not be forward of the vertical plane that extends straight up from your toes. If so, take a slightly longer step. From the bottom position, push back up from your forward foot, bringing it back beside the other. Repeat on the opposite side for the required number of repetitions. ',
          muscles: [13],
          level: 1,
          type: 2,
        },
        18: {
          id: '18',
          name: 'Squat',
          description: 'Stand with your feet shoulder width apart. You can place your hands behind your head. This will be your starting position. Begin the movement by flexing your knees and hips, sitting back with your hips. Continue down to full depth if you are able,and quickly reverse the motion until you return to the starting position. As you squat, keep your head and chest up and push your knees out.',
          muscles: [13],
          level: 1,
          type: 2,
        },
        19: {
          id: '19',
          name: 'Spell Caster',
          description: 'Hold a dumbbell in each hand with a pronated grip. Your feet should be wide with your hips and knees extended. This will be your starting position. Begin the movement by pulling both of the dumbbells to one side next to your hip, rotating your torso. Keeping your arms straight and the dumbbells parallel to the ground, rotate your torso to swing the weights to your opposite side. Continue alternating, rotating from one side to the other until the set is complete.',
          muscles: [1],
          level: 1,
          type: 2,
        },
      },
    },
  },
}
